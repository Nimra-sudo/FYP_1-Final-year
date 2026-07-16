import "../App.css";
import {
  FaUser,
  FaLock,
  FaFingerprint,
  FaCamera,
} from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { useRef } from "react";

function Login() {
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  // Scan Face Function
  const handleScan = () => {
    // 3 second scan animation
    setTimeout(() => {
      navigate("/access-granted");
    }, 3000);
  };

  return (
    <div className="login-page">
      {/* Left Side Camera */}
      <div className="left-panel">
        <div className="camera-card">
          <h1>SecureFace AI</h1>

          <p className="camera-text">
            AI Powered Face Liveness Verification
          </p>

          <div className="camera-wrapper">
            <Webcam
              ref={webcamRef}
              audio={false}
              mirrored={true}
              screenshotFormat="image/jpeg"
              className="login-webcam"
              videoConstraints={{
                width: 640,
                height: 480,
                facingMode: "user",
              }}
            />

            <div className="scan-frame"></div>
          </div>

          <div className="camera-status">
            <span className="green-dot"></span>
            Camera Ready
          </div>

          {/* Scan Button */}
          <button className="scan-btn" onClick={handleScan}>
            <FaCamera />
            Scan Face
          </button>
        </div>
      </div>

      {/* Right Side Login */}
      <div className="right-panel">
        <div className="login-card">
          <div className="login-logo">
            <FaFingerprint />
          </div>

          <h2>System Access</h2>

          <p className="sub-text">
            Please authenticate to continue to your dashboard.
          </p>

          <div className="input-group">
            <label>Username or ID</label>

            <div className="input-box">
              <FaUser className="icon" />

              <input
                type="text"
                placeholder="Enter your credentials"
              />
            </div>
          </div>

          <div className="input-group">
            <div className="password-head">
              <label>Password</label>

              <span>Forgot Password?</span>
            </div>

            <div className="input-box">
              <FaLock className="icon" />

              <input
                type="password"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            className="login-btn"
            onClick={() => navigate("/dashboard")}
          >
            <FiLogIn />
            Login
          </button>

          <div className="divider">
            <span></span>

            <p>or</p>

            <span></span>
          </div>

          <button
            className="admin-btn"
            onClick={() => navigate("/signup")}
          >
            <FaFingerprint />
            Sign Up
          </button>

          <p className="footer-text">
            Protected by SecureFace AI TrustEngine v2
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;