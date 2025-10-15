import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [arSupported, setArSupported] = useState(false);

  // The 8th Wall project URL
  const eighthWallUrl = 'https://autoviz.8thwall.app/wheel-ar/';

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      setIsMobile(isMobileDevice);
      return isMobileDevice;
    };

    // Check AR support
    const checkARSupport = () => {
      const hasWebXR = 'xr' in navigator;
      const hasWebGL = !!window.WebGLRenderingContext;
      const hasGetUserMedia = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
      
      const supported = hasWebGL && hasGetUserMedia;
      setArSupported(supported);
      return supported;
    };

    const mobile = checkMobile();
    const arSupport = checkARSupport();

    console.log('AutoViz AR Experience loaded');
    console.log('Mobile device:', mobile);
    console.log('AR supported:', arSupport);

    // Add mobile-specific meta tags
    if (mobile) {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }
    }

    // Set a timeout to detect if iframe is taking too long to load
    const loadingTimeout = setTimeout(() => {
      if (!iframeLoaded) {
        console.log('Iframe loading timeout - providing direct navigation option');
        setError('AR experience is taking longer than expected to load. This might be due to iframe restrictions. You can try opening it directly.');
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(loadingTimeout);
  }, [iframeLoaded]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setError(null);
    console.log('8th Wall AR experience loaded successfully');
  };

  const handleIframeError = () => {
    console.error('Error loading 8th Wall AR experience - likely iframe restrictions');
    // If iframe fails, redirect to the AR experience directly
    window.location.href = eighthWallUrl;
  };

  const handleDirectNavigation = () => {
    console.log('Navigating directly to 8th Wall AR experience');
    window.open(eighthWallUrl, '_blank');
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
            <h3>AR Experience Loading Issue</h3>
            <p>{error}</p>
            <div className="button-group">
              <button 
                onClick={() => window.location.reload()} 
                className="retry-button"
              >
                Retry
              </button>
              <button 
                onClick={handleDirectNavigation} 
                className="direct-nav-button"
              >
                Open AR Experience Directly
              </button>
            </div>
            {isMobile && (
              <div className="mobile-tips">
                <p><strong>Mobile Tips:</strong></p>
                <ul>
                  <li>Make sure you're using HTTPS</li>
                  <li>Allow camera permissions when prompted</li>
                  <li>Try the "Open Directly" button above</li>
                  <li>Use a modern browser (Chrome/Safari recommended)</li>
                </ul>
              </div>
            )}
          </div>
        )}
        
        {!iframeLoaded && !error && (
          <div className="loading-message">
            <div className="spinner"></div>
            <p>Loading AR Experience...</p>
            {isMobile && (
              <p className="mobile-note">Please allow camera access when prompted</p>
            )}
            {!arSupported && (
              <p className="warning-note">⚠️ AR may not be supported on this device</p>
            )}
            <div className="loading-actions">
              <p className="skip-note">Taking too long?</p>
              <button 
                onClick={handleDirectNavigation} 
                className="skip-button"
              >
                Open AR Experience Directly
              </button>
            </div>
          </div>
        )}
        
        <iframe
          src={eighthWallUrl}
          title="AutoViz 8th Wall AR Experience"
          className={`ar-iframe ${iframeLoaded ? 'loaded' : ''}`}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allow="camera; microphone; accelerometer; gyroscope; magnetometer; xr-spatial-tracking; fullscreen; autoplay; encrypted-media"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-top-navigation allow-modals"
          style={{
            border: 'none',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        />
      </div>
      
      <div className="app-footer">
        <p>Powered by 8th Wall AR Technology</p>
      </div>
    </div>
  );
}

export default App;
