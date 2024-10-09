"use client";

import { useState, useRef, useEffect, DragEventHandler } from "react";
import styles from './Upload.module.css'; // Import your CSS module
import heic2any from "heic2any";

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const querySessionId = new URLSearchParams(window.location.search).get("session_id");
    if (querySessionId) {
      setSessionId(querySessionId);
    } else {
      alert("No session ID provided in the URL.");
    }
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === "image/heic" || selectedFile.type=== "image/heif") {
        try {
          // Convert HEIC/HEIF to JPEG
          const convertedBlobOrArray = await heic2any({
            blob: selectedFile,
            toType: "image/jpeg",
          });

          console.log(convertedBlobOrArray)

          // If it's an array of Blob, merge them; otherwise, use the single Blob
          const blobArray = Array.isArray(convertedBlobOrArray) ? convertedBlobOrArray : [convertedBlobOrArray];
          const combinedBlob = new Blob(blobArray, { type: "image/jpeg" });
  
          const url = URL.createObjectURL(combinedBlob);
          setPreviewUrl(url); // Preview the converted image
  
          // Create a new File object to replace the HEIC/HEIF one in the input
          const convertedFile = new File([combinedBlob], selectedFile.name.replace(/\.[^/.]+$/, "") + ".jpg", {
            type: "image/jpeg",
            lastModified: Date.now(),
          });
  
          // Manually update the input's files property
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(convertedFile);
          e.target.files = dataTransfer.files;
  
          setFile(convertedFile); // Set the converted file in state
  
          console.log("HEIC/HEIF file converted to JPEG and updated.");
        } catch (error) {
          console.error("Error converting HEIC/HEIF to JPEG:", error);
          alert("The website doesn't support HEIC/HEIF file format for now. Pls try again later.");
        }
      } else {
        setFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile)); // Show preview
      }
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Simulate a click on the hidden file input
    }
  };

  const handleDragEnter = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first.");
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

      if (!res.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await res.json();
      console.log('Data from backend:', data);

      alert("Image successfully uploaded and processed.");
    } catch (error) {
      console.error("Error during submission:", error);
      alert("An error occurred during submission.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Upload Image</h1>
        <p className={styles.headerDescription}>
          Capture or upload an image for processing.
        </p>
      </header>

      <div
        className={styles.uploadArea}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleImageClick}  // Make the upload area clickable
      >
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className={styles.previewImage} />
        ) : (
          <p>Tap to take a picture or select an image.</p>
        )}

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*,image/jpeg,image/heic,image/heif"
          capture="environment" // Opens camera on mobile devices
          className={styles.fileInput} // This should be hidden but still functional
        />
      </div>

      <button
        onClick={handleSubmit}
        className={styles.submitButton}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default UploadPage;
