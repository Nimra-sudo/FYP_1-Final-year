import { useRef, useState } from "react";
import Webcam from "react-webcam";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../App.css";
import {
  FaCamera,
  FaPlay,
  FaStop,
  FaCheckCircle,
} from "react-icons/fa";

function Capture() {
  const webcamRef = useRef(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [status, setStatus] = useState("Waiting for Capture");
  const [confidence, setConfidence] = useState("--");

  const startCamera = () => {
    setCameraOn(true);
    setCapturedImage(null);
    setStatus("Camera Connected");
    setConfidence("--");
  };

  const stopCamera = () => {
    setCameraOn(false);
    setStatus("Camera Stopped");
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();

    if (imageSrc) {
      setCapturedImage(imageSrc);
      setStatus("Real Face Detected");
      setConfidence("99.8%");
    }
  };

  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="capture-page">
          <div className="capture-header">
            <h1>Live Identity Verification</h1>

            <p>
              Secure real-time facial capture and liveness detection.
            </p>
          </div>

          <div className="capture-container">
            {/* LEFT */}

            <div className="camera-card">
              <div className="camera-top">
                <span className="camera-status">
                  ● {cameraOn ? "CAMERA CONNECTED" : "CAMERA OFF"}
                </span>

                <span>1920 x 1080</span>
              </div>

              <div className="camera-preview">
                {cameraOn ? (
                  <Webcam
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="webcam"
                    mirrored={true}
                  />
                ) : (
                  <div className="camera-placeholder">
                    Camera is Off
                  </div>
                )}
              </div>

              <div className="camera-buttons">
                <button
                  className="camera-btn"
                  onClick={startCamera}
                >
                  <FaPlay />
                  Start Camera
                </button>

                <button
                  className="capture-btn"
                  onClick={capture}
                >
                  <FaCamera />
                  Capture
                </button>

                <button
                  className="camera-btn stop"
                  onClick={stopCamera}
                >
                  <FaStop />
                  Stop
                </button>
              </div>
            </div>

            {/* RIGHT */}

            <div className="result-card">
              <h3>Captured Image</h3>

              {capturedImage ? (
                <img
                  src={capturedImage}
                  alt="Captured"
                  className="captured-img"
                />
              ) : (
                <div className="image-placeholder">
                  No Image Captured
                </div>
              )}

              <div className="result-box">
                <FaCheckCircle className="success-icon" />

                <h2>{status}</h2>

                <p>
                  Confidence :
                  <strong> {confidence}</strong>
                </p>

                <button className="proceed-btn">
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capture;