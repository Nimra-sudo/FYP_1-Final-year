import "../App.css";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaFingerprint,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert("Account created successfully!");
      navigate("/");
    } catch (error) {
      alert(error.message || "Backend se connection nahi ho saka.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
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

      <div className="right-panel">
        <div className="login-card">
          <h2>Create Account</h2>
          <p className="sub-text">
            Create your SecureFace AI account to continue.
          </p>

          <form onSubmit={handleSignup}>
            <div className="input-group">
              <label>First Name</label>
              <div className="input-box">
                <FaUser className="icon" />
                <input
                  name="firstName"
                  type="text"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <div className="input-box">
                <FaUser className="icon" />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <div className="input-box">
                <FaEnvelope className="icon" />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-box">
                <FaLock className="icon" />
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <div className="input-box">
                <FaLock className="icon" />
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              <FaFingerprint />
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className="divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

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