// src/components/DownloadButton.jsx
import React from 'react';
import "./index.css"

const DownloadButton = ({ stageRef }) => {
  const handleDownload = () => {
    const uri = stageRef.current.toDataURL({ pixelRatio: 2 });
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = uri;
    link.click();
  };

  return (
    <button onClick={handleDownload} className='download-btn'>
      Download Canvas
    </button>
  );
};

export default DownloadButton;
