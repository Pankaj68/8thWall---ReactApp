import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Wheel AR Experience</h2>

      <iframe
        src="https://autoviz.8thwall.app/wheel-ar-update/"
        allow="camera; microphone; fullscreen; xr-spatial-tracking"
        title="8th Wall AR Experience"
        style={styles.iframe}
      ></iframe>
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontFamily: "sans-serif",
    textAlign: "center",
    margin: "10px 0",
  },
  iframe: {
    border: "none",
    width: "100%",
    height: "100%",
    flex: 1,
  },
};

export default App;
