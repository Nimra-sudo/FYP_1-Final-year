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
import { useEffect, useRef, useState } from "react";
import { FaceDetector, FilesetResolver } from "@mediapipe/tasks-vision";

function Login() {
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [faceBox, setFaceBox] = useState(null);

  useEffect(() => {
    let detector;
    let animationId;
    let active = true;

    const startDetection = async () => {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22/wasm"
        );

        detector = await FaceDetector.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite",
          },
          runningMode: "VIDEO",
        });

        const detect = () => {
          if (!active) return;

          const video = webcamRef.current?.video;

          if (video && video.readyState >= 2 && detector) {
            const result = detector.detectForVideo(
              video,
              performance.now()
            );

            setFaceBox(result.detections?.[0]?.boundingBox || null);
          }

          animationId = requestAnimationFrame(detect);
        };

        detect();
      } catch (error) {
        console.error("Face detection error:", error);
      }
    };

    startDetection();

    return () => {
      active = false;
      cancelAnimationFrame(animationId);
      detector?.close();
    };
  }, []);

  // Login API
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      alert("Login successful! Welcome " + data.user.firstName);

      // Store basic user details for the UI
      sessionStorage.setItem("user", JSON.stringify(data.user));
      sessionStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (error) {
      alert(error.message || "Backend connection failed.");
    } finally {
      setLoading(false);
    }
  };

  // Existing face scan animation (not real verification yet)
  const handleScan = () => {
    setTimeout(() => {
      navigate("/access-granted");
    }, 3000);
  };

  return (
    <div className="login-page">
      {/* Left Side Camera */}
      <div className="left-panel">
        <div className="camera-card">
          <h1></h1>

          <p className="camera-text"></p>

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
            {faceBox && (
              <div
                className="face-detection-box"
                style={{
                  position: "absolute",
                  left: `${(faceBox.originX / 640) * 100}%`,
                  top: `${(faceBox.originY / 480) * 100}%`,
                  width: `${(faceBox.width / 640) * 100}%`,
                  height: `${(faceBox.height / 480) * 100}%`,
                  border: "3px solid #00ff66",
                  borderRadius: "8px",
                  pointerEvents: "none",
                  boxSizing: "border-box",
                }}
              />
            )}
          </div>

          <div className="camera-status">
            <span className="green-dot"></span>
            Poor Lighting
          </div>

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

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>

              <div className="input-box">
                <FaUser className="icon" />

                <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              className="login-btn"
              type="submit"
              disabled={loading}
            >
              <FiLogIn />
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

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

          <p className="footer-text"></p>
        </div>
      </div>
    </div>
  );
}

export default Login;