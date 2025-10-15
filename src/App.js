import React from "react";
import "./App.css"; // import the CSS file

function App() {
  const launchAR = () => {
    window.location.href = "https://autoviz.8thwall.app/wheel-ar-update/";
  };

  return (
    <div className="container">
      <h1 className="title">Wheel AR Experience</h1>
      <p className="subtitle">
        Tap the button below to open the AR experience.
      </p>
      <button className="launch-button" onClick={launchAR}>
        Launch AR
      </button>
    </div>
  );
}

export default App;
