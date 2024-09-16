"use client"; // Add this directive to make it a client component

import { useState, useRef } from "react";
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
  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
  
    setLoading(true);
  
    try {
      const res = await fetch("http://localhost:8000/detect/", {
        method: "POST",
        body: formData,
      });
  
      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }
  
      const data = await res.json(); // Parse JSON response
      console.log("API Response Data:", data);  // Log response data
  
      if (!data.processed_filename) {
        throw new Error("processed_filename is missing in the response");
      }
  
      const processedImageUrl = `http://localhost:8000/results/${data.processed_filename}`;
      setPreviewUrl(processedImageUrl); // Replace the original image with processed image
      setLabels(data.labels); // Set the detected labels
      setFoodInfo(data.food_info); // Set the food information
      setIsProcessed(true); // Mark the image as processed
    } catch (error) {
      console.error("Error during submission:", error);  // Log errors
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
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>SnapGI</h1>
        <p style={styles.headerDescription}>
          Upload and process images for food glycemic index detection.
        </p>
      </header>

      {/* Left side: Uploading Area + Submit Button */}
      <div style={styles.leftColumn}>
        <div
          style={styles.uploadArea}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={handleImageClick}  // Click on the image triggers file upload
        >
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" style={styles.previewImage} />
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
          <button onClick={handleReset} style={styles.resetButton}>
            Reset
          </button>
        ) : (
          <button onClick={handleSubmit} disabled={loading} style={styles.button}>
            {loading ? "Uploading..." : "Submit"}
          </button>
        )}
      </div>

      {/* Right side: Display food information */}
      <div style={styles.infoArea}>
        <h2>Food Information</h2>
        <div style={styles.infoContent}>
          {foodInfo.length > 0 ? (
                <ul style={styles.foodList}>
                {foodInfo.map((food, index) => (
                  <li key={index} style={styles.foodItem}>
                    <div style={styles.foodNameContainer}>
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
                        style={styles.copyButton}
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
                <button style={styles.foodflipButton}>
                   Go to Food Flip
                       </button>
                </Link>
                </ul>
          ) : (
            <div style={styles.placeholder}>No food information available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Use column to align vertically
    justifyContent: "center",
    alignItems: "center", // Center both horizontally and vertically
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "20px",
    height: "85vh", // Full viewport height
  },
  header: {
    textAlign: "left", // Align text to the left
    marginBottom: "20px", // Add space below the header
    width: "100%", // Ensure it takes full width
    background: "oklch(49.5518% 0.236871 301.924056 /1)", // Add a soft gradient
    color: "#fff", // White text to contrast with the background
    padding: "30px 20px", // Add more padding for a spacious feel
    borderRadius: "15px", // Slightly more rounded corners
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)", // Enhance the shadow for depth
    transition: "all 0.3s ease", // Add smooth transition for hover effects
  },
  headerTitle: {
    fontSize: "2.5rem", // Larger font for the title
    margin: "0", // Remove default margin
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Add a subtle text shadow
    borderBottom: "2px solid rgba(255, 255, 255, 0.5)", // Decorative underline
    paddingBottom: "10px", // Add spacing below the title
  },
  headerDescription: {
    fontSize: "1.3rem", // Slightly larger font for the description
    marginTop: "10px", // Add space below the title
    opacity: "0.9", // Slightly reduce opacity for subtlety
  },

  leftColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%", // Make it full width for better alignment in center
    backgroundColor: "#fff", // Add a background for better visibility
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a nice shadow for better UX
  },
  uploadArea: {
    width: "100%",
    height: "400px",
    border: "2px dashed #ccc",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px", // Add rounded corners
    cursor: "pointer",  // Add pointer cursor for clickable area
  },
  previewImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "10px", // Rounded corners for the image
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "oklch(49.5518% 0.236871 301.924056 /1)", // Updated color
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    width: "50%", // Align to center of upload area
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  resetButton: {
    marginTop: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#f44336", // Red color for reset button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    width: "50%", // Align to center of upload area
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  infoArea: {
    width: "100%", // Make it full width for better alignment in center
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow for better UX
    maxHeight: "400px",  // Limit the height for scrolling
    overflowY: "auto",  // Make it scrollable when content overflows
  },
  infoContent: {
    maxHeight: "350px",
    overflowY: "auto",
  },
  foodList: {
    listStyleType: "none",
    padding: "0",
  },
  foodItem: {
    marginBottom: "20px",
  },
  placeholder: {
    padding: "10px",
    backgroundColor: "#f2f2f2",
    borderRadius: "5px",
    fontStyle: "italic",
    color: "#555",
  },
  foodNameContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Add space between the name and the copy button
  },
  copyButton: {
    cursor: "pointer",
    backgroundColor: "oklch(49.5518% 0.236871 301.924056 /1)", // Match the color of the submit button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    fontSize: "0.9rem",
  },
  foodflipButton: {
    cursor: "pointer",
    backgroundColor: "oklch(49.5518% 0.236871 301.924056 / 1)", // Match the color of the submit button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px", // Increase padding to make the button larger
    fontSize: "1.2rem", // Increase font size
    width: "200px", // Set a fixed width for consistency (optional)
    textAlign: "center", // Center the text inside the button
    margin: "0 auto", // Use auto margins to center the button horizontally
    display: "block", // Ensure it behaves as a block element for margin auto to work
  },
};

export default SnapGI;
