from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from PIL import Image
import cv2
import io
import os
from ultralytics import YOLO
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import json

app = FastAPI()

# Mount static directory for serving processed images
app.mount("/results", StaticFiles(directory="results"), name="results")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load YOLO model
model = YOLO('model/yolov8s.pt')  # Update path to your weights as necessary

# Directories for saving files
UPLOADS_DIR = "uploads"
RESULTS_DIR = "results"
FOODS_JSON_PATH = "foods.json"

# Ensure the directories exist
os.makedirs(UPLOADS_DIR, exist_ok=True)
os.makedirs(RESULTS_DIR, exist_ok=True)

def load_food_data():
    """Load food data from foods.json."""
    with open(FOODS_JSON_PATH, "r") as file:
        return json.load(file)

def save_original_image(image_data, filename):
    # Save the original uploaded image to the uploads directory
    with open(os.path.join(UPLOADS_DIR, filename), "wb") as f:
        f.write(image_data)

def process_image(image, results_dir=RESULTS_DIR):
    # Perform object detection
    results = model(image)
    labels = []
    
    for result in results:
        boxes = result.boxes.xyxy.cpu().numpy()  # Get bounding boxes
        confidences = result.boxes.conf.cpu().numpy()  # Get confidence scores
        class_ids = result.boxes.cls.cpu().numpy()  # Get class IDs
        names = result.names  # Class names
        img = result.orig_img  # Original image as a NumPy array

        # Collect labels and confidences for return
        for i, box in enumerate(boxes):
            confidence = confidences[i]  # Get confidence score
            class_id = int(class_ids[i])  # Get class ID
            label = names[class_id]  # Get class label
            labels.append(f"{label} ({confidence:.2f})")

        # Convert image from BGR to RGB for correct color display and saving
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        # Draw bounding boxes and labels on the image
        for i, box in enumerate(boxes):
            x1, y1, x2, y2 = map(int, box)  # Convert box coordinates to integers
            color = (255, 0, 0)  # Red bounding box color

            # Draw bounding box and label
            img_rgb = cv2.rectangle(img_rgb, (x1, y1), (x2, y2), color, 1)
            img_rgb = cv2.putText(img_rgb, f'{label} {confidence:.2f}', (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 1)

        # Convert OpenCV image (NumPy array) to PIL Image for saving
        img_pil = Image.fromarray(img_rgb)  # Now it's in RGB format

        # Save the processed image in the results folder
        img_filename = f"processed_image_{np.random.randint(10000)}.png"
        img_pil.save(os.path.join(results_dir, img_filename))

    return img_filename, labels

def get_food_info(labels):
    """Find food information based on detected labels and ensure no duplicates."""
    food_data = load_food_data()
    detected_food_info = []
    seen_foods = set()  # Use a set to track unique food names
    
    for label in labels:
        # Extract food name (before confidence score) from the label
        food_name = label.split(" ")[0].lower()

        if food_name not in seen_foods:  # Add only if it's not already seen
            # Search for the food in the JSON
            for food in food_data["foods"]:
                if food["food"].lower() == food_name:
                    detected_food_info.append(food)
                    seen_foods.add(food_name)  # Mark food as seen
                    break

    return detected_food_info

@app.post("/detect/")
async def detect_objects(file: UploadFile = File(...)):
    try:
        # Read the uploaded image file
        image_data = await file.read()

        # Save the original image to the uploads folder
        original_image_filename = f"original_image_{np.random.randint(10000)}.png"
        save_original_image(image_data, original_image_filename)

        # Open the image file directly using PIL (without converting to a NumPy array)
        image = Image.open(io.BytesIO(image_data))

        # Convert PIL image to OpenCV format (BGR)
        image_cv = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

        # Process the image (perform object detection)
        processed_image_filename, labels = process_image(image_cv)

        # Get food information based on detected labels
        food_info = get_food_info(labels)

        return JSONResponse(content={
            "message": "Detection completed", 
            "original_filename": original_image_filename,
            "processed_filename": processed_image_filename,
            "labels": labels,  # Send labels to the frontend
            "food_info": food_info  # Send food info to the frontend
        })

    except Exception as e:
        return JSONResponse(content={"error": str(e)})
