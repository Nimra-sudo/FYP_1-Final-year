import "../App.css";
import { FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AccessGranted() {
  const navigate = useNavigate();

  // Proceed Button
  const handleProceed = () => {
    navigate("/");
  };

  // Logout Button
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="access-page">
      <div className="access-card">

        <div className="success-icon">
          <FaShieldAlt />
        </div>

        <h1>Access Granted</h1>

        <p>
          Identity verified successfully.
          <br />
          Secure session established.
        </p>

        <div className="info-grid">

          <div className="info-box">
            <small>User ID</small>
            <h3>USR-8842</h3>
          </div>

          <div className="info-box">
            <small>Confidence Score</small>
            <h3 className="green">99.8%</h3>
          </div>

          <div className="info-box">
            <small>Date</small>
            <h3>Jul 16, 2026</h3>
          </div>

          <div className="info-box">
            <small>Time</small>
            <h3>08:24 AM</h3>
          </div>

        </div>

        <button
          className="proceed-btn"
          onClick={handleProceed}
        >
          Proceed
        </button>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

        <p className="secure-text">
          Secured by TrustEngine v2
        </p>

      </div>
    </div>
  );
}

export default AccessGranted;