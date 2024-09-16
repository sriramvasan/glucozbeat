"use client"; // Add this directive to make it a client component

import { useState, useRef } from "react";
import styles from './SnapGI.module.css';
import Image from "next/image";
import Link from "next/link";

const SnapGI = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // For showing uploaded image or processed image
  const [labels, setLabels] = useState<string[]>([]); // State to hold detected labels
  const [foodInfo, setFoodInfo] = useState<any[]>([]); // State to hold food information
  const [loading, setLoading] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false); // State to track if the image has been processed
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null); // State to track which item was copied
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Ref to the file input element

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
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Set preview image URL
      setIsProcessed(false); // Reset the processed state when a new image is uploaded
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
    e.preventDefault()
    if (!file) {
      alert("Please select a file first");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
  
    setLoading(true);
  
    try {
      const res = await fetch("https://herglucozbeat.com/api/detect/", {
        method: "POST",
        body: formData,
      });
  
      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }
  
      const data = await res.json(); // Parse JSON response
  
      if (!data.processed_filename) {
        throw new Error("processed_filename is missing in the response");
      }
  
      const processedImageUrl = `https://herglucozbeat.com/api/results/${data.processed_filename}`;
      setPreviewUrl(processedImageUrl); // Replace the original image with processed image
      setLabels(data.labels); // Set the detected labels
      setFoodInfo(data.food_info); // Set the food information
      setIsProcessed(true); // Mark the image as processed
    } catch (error) {
      console.error("Error during submission:", error);
      alert("An error occurred during submission. Check the console for more details.");
    } finally {
      setLoading(false);
    }
  };

  // Reset all states to their initial values
  const handleReset = () => {
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
          Upload and process images for food glycemic index detection.
        </p>
      </header>
      {/* Left side: Uploading Area + Submit Button */}
      <div className={styles.leftColumn}>
        <div
          className={styles.uploadArea}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={handleImageClick}  // Click on the image triggers file upload
        >
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" className={styles.previewImage} /> // Do not change it into Image, has some fast refresh problems.
          ) : (
            <>
              <p>Drag and Drop an Image Here</p>
              <p>or</p>
              <p>Press anywhere to choose a picture to upload</p>
            </>
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }} // Hide the file input element
        />
        {/* Conditionally render Submit or Reset button based on isProcessed */}
        {isProcessed ? (
          <button onClick={handleReset} className={styles.resetButton}>
            Reset
          </button>
        ) : (
          <button onClick={handleSubmit} disabled={loading} className={styles.button}>
            {loading ? "Uploading..." : "Submit"}
          </button>
        )}        
      </div>

      {/* Right side: Display food information */}
      <div className={styles.infoArea}>
        <h2>Food Information</h2>
        <div className={styles.infoContent}>
          {foodInfo.length > 0 ? (
                <ul className={styles.foodList}>
                {foodInfo.map((food, index) => (
                  <li key={index} className={styles.foodItem}>
                    <div className={styles.foodNameContainer}>
                      {/* Make the food name bold and bigger */}
                      <h3 style={{ fontWeight: "bold", fontSize: "1.8rem", display: "inline-block" }}>
                        {food.food}
                      </h3>
                      {/* Add a copy button */}
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(food.food);
                          setCopiedIndex(index); // Set the index of the copied item
                        }}
                        className={styles.copyButton}
                      >
                        {copiedIndex === index ? "Copied" : "Copy"}  {/* Change text to "Copied" when clicked */}
                      </button>
                    </div>
                    {/* Glycemic Index remains normal */}
                    <p><strong>Glycemic Index:</strong> {food.glycemic_index}</p>
                    <p>{food.description}</p>
                  </li>
                ))}
                <p style={{ textAlign: 'center', marginBottom: '20px' }}>To find out what alternative there is, click the button below </p>
                <Link href="/giFoods">
                <button className={styles.foodflipButton}>
                   Go to Food Flip
                       </button>
                </Link>
                </ul>
          ) : (
            <div className={styles.placeholder}>No food information available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SnapGI;
