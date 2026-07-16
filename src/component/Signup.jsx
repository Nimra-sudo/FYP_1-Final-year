import "../App.css";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaFingerprint,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Yahan baad me API call hogi

    alert("Account Created Successfully!");

    // Signup ke baad Login page open hoga
    navigate("/");
  };

  return (
    <div className="login-page">
      {/* Left Side */}
      <div className="left-panel">
        <div className="brand-content">
          <div className="logo-box">
            <FaFingerprint />
          </div>

          <div>
            <h1>SecureFace AI</h1>
            <p>
              Enterprise-grade biometric authentication platform.
              Protecting critical infrastructure with clinical precision
              and zero-trust verification models.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-panel">
        <div className="login-card">
          <h2>Create Account</h2>

          <p className="sub-text">
            Create your SecureFace AI account to continue.
          </p>

          <form onSubmit={handleSignup}>
            {/* First Name */}
            <div className="input-group">
              <label>First Name</label>
              <div className="input-box">
                <FaUser className="icon" />
                <input
                  type="text"
                  placeholder="Enter First Name"
                  required
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="input-group">
              <label>Last Name</label>
              <div className="input-box">
                <FaUser className="icon" />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="input-group">
              <label>Email Address</label>
              <div className="input-box">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Password</label>
              <div className="input-box">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="input-group">
              <label>Confirm Password</label>
              <div className="input-box">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>

            {/* Sign Up Button */}
            <button type="submit" className="login-btn">
              <FaFingerprint />
              Sign Up
            </button>
          </form>

          <div className="divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          {/* Already have account */}
          <button
            className="admin-btn"
            onClick={() => navigate("/")}
          >
            <FaFingerprint />
            Sign In
          </button>

          <p className="footer-text">
            Protected by SecureFace AI TrustEngine v2
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;