import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [error, setError] = useState(null);

  // The 8th Wall project URL
  const eighthWallUrl = 'https://autoviz.8thwall.app/wheel-ar/';

  useEffect(() => {
    // Add any initialization logic here if needed
    console.log('AutoViz AR Experience loaded');
  }, []);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setError(null);
    console.log('8th Wall AR experience loaded successfully');
  };

  const handleIframeError = () => {
    setError('Failed to load the 8th Wall AR experience. Please check your internet connection and try again.');
    console.error('Error loading 8th Wall AR experience');
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1>AutoViz AR Experience</h1>
        <p>8th Wall AR Wheel Experience</p>
      </div>
      
      <div className="iframe-container">
        {error && (
          <div className="error-message">
            <h3>Error Loading AR Experience</h3>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="retry-button"
            >
              Retry
            </button>
          </div>
        )}
        
        {!iframeLoaded && !error && (
          <div className="loading-message">
            <div className="spinner"></div>
            <p>Loading AR Experience...</p>
          </div>
        )}
        
        <iframe
          src={eighthWallUrl}
          title="AutoViz 8th Wall AR Experience"
          className={`ar-iframe ${iframeLoaded ? 'loaded' : ''}`}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allow="camera; microphone; accelerometer; gyroscope; magnetometer; xr-spatial-tracking"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation"
        />
      </div>
      
      <div className="app-footer">
        <p>Powered by 8th Wall AR Technology</p>
      </div>
    </div>
  );
}

export default App;
