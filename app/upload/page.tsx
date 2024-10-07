"use client";

import { useState, useRef, useEffect } from "react";
import styles from './Upload.module.css'; // Import your CSS module

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile)); // Show preview
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Simulate a click on the hidden file input
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
          accept="image/*"
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
