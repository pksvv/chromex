// frontend/src/components/ScreenshotForm.js
'use client';

import React, { useState } from 'react';
import axios from 'axios';

const ScreenshotForm = () => {
  const [url, setUrl] = useState('');
  const [splits, setSplits] = useState(1);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const handleCapture = async () => {
    if (!url || !splits || splits < 1) {
      alert('Please provide a valid URL and number of splits.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/capture', { url, splits });
      setImages(response.data.images);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'An error occurred.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Capture Webpage Screenshot</h2>
      <input
        type="url"
        placeholder="Enter webpage URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      /><br /><br />
      <input
        type="number"
        placeholder="Number of splits"
        value={splits}
        onChange={(e) => setSplits(e.target.value)}
        min="1"
      /><br /><br />
      <button onClick={handleCapture} disabled={loading}>
        {loading ? 'Capturing...' : 'Capture Screenshot'}
      </button>
      {images.length > 0 && (
        <div>
          <h3>Download Your Image Segments:</h3>
          {images.map((imgSrc, index) => (
            <div key={index}>
              <a href={imgSrc} download={`screenshot_${index + 1}.png`}>
                Download Segment {index + 1}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScreenshotForm;
