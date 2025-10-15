import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showAR, setShowAR] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  // 8th Wall AR experience URL
  const eighthWallUrl = 'https://autoviz.8thwall.app/wheel-ar-update/';

  useEffect(() => {
    // Detect iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(iOS);
  }, []);

  const handleViewAR = () => {
    setIsLoading(true);
    setLoadError(false);
    setShowAR(true);
    
    // iOS iframe loading workaround
    if (isIOS) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  const handleCloseAR = () => {
    setShowAR(false);
    setIsLoading(false);
    setLoadError(false);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    setLoadError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setLoadError(true);
  };

  return (
    <div className="App">
      {!showAR ? (
        <button className="ar-button" onClick={handleViewAR}>
          View in AR
        </button>
      ) : (
        <div className="iframe-container">
          <button className="close-button" onClick={handleCloseAR}>
            Close AR
          </button>
          
          {isLoading && (
            <div className="loading-overlay">
              <div className="loading-spinner"></div>
              <p>Loading AR Experience...</p>
              {isIOS && (
                <p className="ios-note">iOS users: Please allow camera access when prompted</p>
              )}
            </div>
          )}
          
          {loadError && (
            <div className="error-overlay">
              <h3>Failed to load AR experience</h3>
              <p>Please check your internet connection and try again.</p>
              <button className="retry-button" onClick={handleViewAR}>
                Retry
              </button>
            </div>
          )}
          
          <iframe
            src={eighthWallUrl}
            title="AutoViz AR Experience"
            className="ar-iframe"
            allow="camera; microphone; accelerometer; gyroscope; magnetometer; xr-spatial-tracking; fullscreen"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-camera"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ 
              display: loadError ? 'none' : 'block',
              opacity: isLoading ? 0.5 : 1 
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
