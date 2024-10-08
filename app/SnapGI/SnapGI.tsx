"use client";

import { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code"; // Using react-qr-code
import { v4 as uuidv4 } from "uuid"; // Import UUID for session ID generation
import styles from './SnapGI.module.css'; // Ensure your styles path is correct
import Link from "next/link";

const SnapGI = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // For showing uploaded image or processed image
  const [labels, setLabels] = useState<string[]>([]); // State to hold detected labels
  const [foodInfo, setFoodInfo] = useState<any[]>([]); // State to hold food information
  const [loading, setLoading] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false); // State to track if the image has been processed
  const [sessionId, setSessionId] = useState<string | null>(null); // State to store session ID
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Ref to the file input element
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null); // State to track which item was copied

  // QR code URL (bridge website for uploading)
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  // Handle component mount logic (session ID generation and URL update)
  useEffect(() => {
      let currentSessionId = new URLSearchParams(window.location.search).get("session_id");
      if (!currentSessionId) {
        currentSessionId = uuidv4();
        window.history.replaceState(null, '', `?session_id=${currentSessionId}`);
      }
      setSessionId(currentSessionId);

      // Set the QR Code URL for the upload page with the session ID
      setQrCodeUrl(`https://herglucozbeat.com/upload?session_id=${currentSessionId}`);

      // Establish WebSocket connection with the session ID
      const ws = new WebSocket(`wss://herglucozbeat.com/api/model/ws/${currentSessionId}`);

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('WebSocket message received:', data);

        if (data.processed_image_base64) {
          setPreviewUrl(`data:image/png;base64,${data.processed_image_base64}`);
          setLabels(data.labels);
          setFoodInfo(data.food_info);
          setIsProcessed(true); // Ensure the reset button is shown after processing
        }
      };

      ws.onopen = () => {
        console.log('WebSocket connection opened');
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      ws.onclose = () => {
        console.log('WebSocket connection closed');
      };

      return () => {
        ws.close();
      };
    }, []);

  // Handle drag and drop or click-based file selection
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Set preview image URL
      setIsProcessed(false); // Reset the processed state when a new image is uploaded
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const selectedFile = e.target.files[0];
        if (selectedFile instanceof File) {
          setFile(selectedFile);
          setPreviewUrl(URL.createObjectURL(selectedFile)); // Show the new image preview

          // Reset the processed state when a new image is uploaded
          setIsProcessed(false);
          setLabels([]);  // Clear previous labels
          setFoodInfo([]);  // Clear previous food info
        }
      }
    };

  // Open file input when clicking on the image
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Simulate file input click
    }
  };

  // Handle submit to send the image for processing
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      if (!file) {
        alert("Please select a file first");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      setLoading(true);

      try {
        const res = await fetch(`https://herglucozbeat.com/api/model/detect/?session_id=${sessionId}`, {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        console.log('Data from backend: ', data);

        if (!data.processed_image_base64) {
          throw new Error("processed_image_base64 is missing in the response");
        }

        // Once the image is processed, show the processed image with bounding boxes
        setPreviewUrl(`data:image/png;base64,${data.processed_image_base64}`);
        setLabels(data.labels);  // Set the detected labels
        setFoodInfo(data.food_info);  // Set the detected food info
        setIsProcessed(true);  // Show reset button only after processing
      } catch (error) {
        console.error("Error during submission:", error);
        alert("An error occurred during submission.");
      } finally {
        setLoading(false);
      }
    };

  // Reset all states to their initial values
  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent the event from bubbling up to the upload area
    setFile(null);
    setPreviewUrl(null);
    setLabels([]);
    setFoodInfo([]);
    setIsProcessed(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input field
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>SnapGI</h1>
        <p className={styles.headerDescription}>
        Curious about the GI index for the food in front of you? 
        </p>
        <p className={styles.pageInstructions}>
        Upload an image, and our food recognition tool will provide detailed information about the ingredients, GI index, and more! 
        <br />Whether you're tracking your meals or learning about new foods, we're here to help you on this delicious journey. 
        <br />Let's explore your plate together!      </p>
      </header>

      <div className={styles.contentWrapper}>
        {/* Left side: Uploading Area */}
        <div className={styles.leftColumn}>
          <div
            className={styles.uploadArea}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={handleImageClick}  // Click on the image triggers file upload
          >
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className={styles.previewImage} />
            ) : (
              <>
                <p>Drag and Drop an Image Here</p>
                <p>or</p>
                <p>Press anywhere to choose a picture to upload</p>
              </>
            )}

            {isProcessed && (
              <button onClick={handleReset} className={styles.resetButton}>
                Reset
              </button>
            )}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            capture="environment" // Opens camera on mobile devices
            style={{ display: "none" }}  // Hide the file input element
          />

          {!isProcessed && (
            <div className={styles.buttonGroup}>
              <button onClick={handleSubmit} disabled={loading} className={styles.actionButton}>
                {loading ? "Uploading..." : "Submit"}
              </button>
            </div>
          )}
        </div>

        {/* Right side: QR code display */}
        <div className={styles.rightColumn}>
          <div className={styles.qrCodeContainer}>
            <h2>Mobile Upload</h2><br />
            <QRCode value={qrCodeUrl} size={180} /><br />
            <p className={styles.qrDescription}>
              1. Scan to get to the upload page on your mobile device.<br /><br />
              2. Upload the image, and the information will display.
            </p>
          </div>
        </div>
      </div>

        {/* Below: Display food information */}
        <div className={styles.infoArea}>
          <h2>Food Information</h2>
          <div className={styles.infoContent}>
            {foodInfo.length > 0 ? (
              <ul className={styles.foodList}>
                {foodInfo.map((food, index) => (
                  <li key={index} className={styles.foodItem}>
                    <div className={styles.foodNameContainer}>
                      <h3 style={{ fontWeight: "bold", fontSize: "1.8rem", display: "inline-block" }}>
                        {food.food}
                      </h3>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(food.food);
                          setCopiedIndex(index); // Set the index of the copied item
                        }}
                        className={styles.copyButton}
                      >
                        {copiedIndex === index ? "Copied" : "Copy"} {/* Change text to "Copied" when clicked */}
                      </button>
                    </div>
                    <p><strong>Glycemic Index:</strong> {food.glycemic_index}</p>
                    <p>{food.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className={styles.placeholder}>No food information available.</div>
            )}
          </div>
        </div>

        {/* Separate Section for Go to Food Flip */}
        <div className={styles.foodFlipContainer}>
          <p style={{ textAlign: 'center', marginBottom: '20px' }}>
            Want to know what alternative is out there ? Copy the food and click the button below
          </p>
          <Link href="/giFoods" className={styles.foodflipButton}>
            Go to Food Flip
          </Link>
        </div>

        </div>
  );
};

export default SnapGI;
