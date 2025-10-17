import React, { useState } from 'react';
import './App.css';

function App() {
  const [showAR, setShowAR] = useState(false);

  // 8th Wall AR experience URL
  const eighthWallUrl = 'https://autoviz.8thwall.app/wheel-ar';

  const handleViewAR = () => {
    setShowAR(true);
  };

  const handleCloseAR = () => {
    setShowAR(false);
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
          <iframe
            src={eighthWallUrl}
            title="AutoViz AR Experience"
            className="ar-iframe"
            allow="camera; microphone; accelerometer; gyroscope; magnetometer; xr-spatial-tracking"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export default App;
