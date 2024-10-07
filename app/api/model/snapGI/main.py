from fastapi import FastAPI, UploadFile, File, WebSocket, WebSocketDisconnect, Request, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import cv2
from ultralytics import YOLO
import numpy as np
import base64
import json
import torch
from transformers import AutoImageProcessor, AutoModelForImageClassification
import mimetypes
from slowapi import Limiter
from slowapi.util import get_remote_address


app = FastAPI()
limiter = Limiter(key_func=get_remote_address)

# Load YOLO model
yolo_model = YOLO('model/yolov8s.pt')  # Update path to your weights as necessary

# Hugging Face transformer model and processor
processor = AutoImageProcessor.from_pretrained("rajistics/finetuned-indian-food", cache_dir="./model_cache")
classifier_model = AutoModelForImageClassification.from_pretrained("rajistics/finetuned-indian-food",
                                                                   cache_dir="./model_cache")

# Path for food data
FOODS_JSON_PATH = "foods.json"

# Dictionary to store active WebSocket connections for each session
connections = {}

# CORS middleware to allow all origins (useful for testing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def load_food_data():
    """Load food data from foods.json."""
    with open(FOODS_JSON_PATH, "r") as file:
        return json.load(file)


def get_food_info(labels):
    """Find food information based on detected labels and ensure no duplicates."""
    food_data = load_food_data()
    detected_food_info = []
    seen_foods = set()  # Use a set to track unique food names

    for label in labels:
        # Normalize the label to lowercase
        food_name = label.split(" ")[0].lower()

        if food_name not in seen_foods:  # Add only if it's not already seen
            # Search for the food in the JSON, making it case-insensitive
            for food in food_data["foods"]:
                if food["food"].lower() == food_name:  # Compare in lowercase
                    # Modify the food name to readable format (capitalize words)
                    food["food"] = food["food"].replace("_", " ").title()
                    detected_food_info.append(food)
                    seen_foods.add(food_name)  # Mark food as seen
                    break

    return detected_food_info






def process_image_with_yolo(image, confidence_threshold=0.5):
    """Process the image with YOLO model to detect objects."""
    results = yolo_model(image)
    labels = []
    max_confidence = 0  # Initialize the maximum confidence score

    for result in results:
        boxes = result.boxes.xyxy.cpu().numpy()  # Get bounding boxes
        confidences = result.boxes.conf.cpu().numpy()  # Get confidence scores
        class_ids = result.boxes.cls.cpu().numpy()  # Get class IDs
        names = result.names  # Class names
        img = result.orig_img  # Original image as a NumPy array

        # Collect labels and confidences for return
        for i, box in enumerate(boxes):
            confidence = confidences[i]  # Get confidence score
            max_confidence = max(max_confidence, confidence)  # Track the maximum confidence score
            class_id = int(class_ids[i])  # Get class ID
            label = names[class_id]  # Get class label
            labels.append(f"{label} ({confidence:.2f})")

        # Convert image from BGR to RGB for correct color display
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        # Draw bounding boxes and labels on the image
        for i, box in enumerate(boxes):
            x1, y1, x2, y2 = map(int, box)  # Convert box coordinates to integers
            color = (255, 0, 0)  # Red bounding box color

            # Draw bounding box and label
            img_rgb = cv2.rectangle(img_rgb, (x1, y1), (x2, y2), color, 2)  # Thicker line (2)
            img_rgb = cv2.putText(img_rgb, f'{label} {confidence:.2f}', (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9,
                                  color, 2)  # Larger font and thicker text

        # Convert OpenCV image (NumPy array) to PIL Image for conversion to bytes
        img_pil = Image.fromarray(img_rgb)  # Now it's in RGB format

        # Convert the PIL image to bytes and encode it as base64
        buffered = io.BytesIO()
        img_pil.save(buffered, format="PNG")
        img_base64 = base64.b64encode(buffered.getvalue()).decode('utf-8')  # Convert to base64 string

    return img_base64, labels, max_confidence



def classify_image_with_transformer(image_pil):
    """Classify the image using the transformer model."""
    inputs = processor(images=image_pil, return_tensors="pt")
    with torch.no_grad():
        outputs = classifier_model(**inputs)

    predicted_label_idx = outputs.logits.argmax(-1).item()
    labels = classifier_model.config.id2label
    predicted_label = labels[predicted_label_idx]

    # Convert PIL image to base64
    buffered = io.BytesIO()
    image_pil.save(buffered, format="PNG")
    img_base64 = base64.b64encode(buffered.getvalue()).decode('utf-8')

    return img_base64, [predicted_label]


@app.post("/detect/")
@limiter.limit("11/minute")
async def detect_objects(request: Request, file: UploadFile = File(...)):
    """Handle image uploads and process with the session ID."""
    try:
        # Extract session ID from query parameters
        session_id = request.query_params.get("session_id")
        if not session_id:
            raise ValueError("Session ID not provided")

        valid_image_types = ['image/png', 'image/jpg', 'image/jpeg']
        mime_type, _ = mimetypes.guess_type(file.filename)
        if mime_type is None or mime_type not in valid_image_types:
            raise HTTPException(status_code=400, detail='Invalid image type: Accepted extensions are .png, .jpg, .jpeg')
        
        # Read the uploaded image file
        image_data = await file.read()
        print("File received, size:", len(image_data))
            
        # Open the image file directly using PIL (without converting to a NumPy array)
        image_pil = Image.open(io.BytesIO(image_data))
        image_cv = cv2.cvtColor(np.array(image_pil), cv2.COLOR_RGB2BGR)

        # Process the image (perform object detection using YOLO)
        processed_image_base64, labels, max_confidence = process_image_with_yolo(image_cv)

        # If max confidence is below 40%, fallback to classification using transformer
        if max_confidence < 0.4:
            print("Low confidence score, falling back to transformer model.")
            processed_image_base64, labels = classify_image_with_transformer(image_pil)
            # If transformer fails to detect anything, revert to YOLO's result
            if not labels:
                print("Transformer model failed, reverting to YOLO results.")
                processed_image_base64, labels, max_confidence = process_image_with_yolo(image_cv)

        # Get food information based on detected labels
        food_info = get_food_info(labels)

        # Broadcast the processed result to all WebSocket connections for this session ID
        if session_id in connections:
            for websocket in connections[session_id]:
                await websocket.send_json({
                    "processed_image_base64": processed_image_base64,
                    "labels": labels,
                    "food_info": food_info
                })

        # Fix: Ensure that processed_image_base64, labels, and food_info are included in the response
        return JSONResponse(content={
            "message": "Detection completed",
            "processed_image_base64": processed_image_base64,  # Include base64 image in response
            "labels": labels,
            "food_info": food_info
        })


    except Exception as e:
        print(f"Error occurred during processing: {e}")
        return JSONResponse(content={"error": str(e)}, status_code=400)

@app.websocket("/ws/{session_id}")
async def websocket_endpoint(websocket: WebSocket, session_id: str):
    """Handle WebSocket connections with session IDs."""
    await websocket.accept()

    # Add the WebSocket to the list of connections for this session ID
    if session_id not in connections:
        connections[session_id] = []
    connections[session_id].append(websocket)

    try:
        while True:
            # Keep the connection alive by receiving any message (though we're not using it)
            await websocket.receive_text()
    except WebSocketDisconnect:
        # Remove the WebSocket from the list of connections when disconnected
        connections[session_id].remove(websocket)
        if not connections[session_id]:
            del connections[session_id]
        print(f"WebSocket disconnected for session_id: {session_id}")
