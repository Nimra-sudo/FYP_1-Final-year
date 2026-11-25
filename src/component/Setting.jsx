import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../App.css";

function Setting() {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminMessage, setAdminMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    setAdminMessage("");

    if (!adminEmail.trim()) {
      setAdminMessage("Please enter an email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/add-admin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            email: adminEmail.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add admin.");
      }

      setAdminMessage(data.message || "Admin added successfully!");
      setAdminEmail("");
    } catch (error) {
      setAdminMessage(
        error.message === "Failed to fetch"
          ? "Backend connection failed. Check your server and API URL."
          : error.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="settings-page">
          <div className="settings-header">
            <h1>System Settings</h1>
            <p>
              Configure global application parameters, diagnostic thresholds,
              and security controls for your SecureFace AI deployment.
            </p>
          </div>

          <div className="settings-wrapper">
            <div className="settings-sidebar">
              <div className="setting-menu active-setting">
                📷 Camera Configuration
              </div>

              <div className="setting-menu">
                ⚙️ Model Parameters
              </div>

              <div className="setting-menu">
                🛡 Security & Access
              </div>

              <div className="setting-menu">
                🎨 Appearance
              </div>

              <div className="setting-menu">
                🔔 Notifications
              </div>
            </div>

            <div className="settings-content">
              {/* Camera Settings */}
              <div className="settings-card">
                <h2>📷 Camera Settings</h2>

                <p>
                  Manage video feed inputs and adjust optical properties for
                  optimal capture.
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label>Input Device</label>
                    <select defaultValue="integrated">
                      <option value="integrated">
                        Integrated Webcam (04F2:B5F7)
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Capture Resolution</label>
                    <select defaultValue="1080p">
                      <option value="1080p">
                        1920 × 1080 (1080p HD)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="slider-box">
                  <label>Exposure Compensation</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="60"
                  />
                </div>

                <div className="toggle-box">
                  <div>
                    <h4>Auto-Focus Priority</h4>
                    <p>
                      Prioritize facial recognition bounding box for autofocus
                      targeting.
                    </p>
                  </div>

                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="button-row">
                  <button
                    className="reset-btn"
                    type="button"
                    onClick={() => window.location.reload()}
                  >
                    Reset Defaults
                  </button>

                  <button className="apply-btn" type="button">
                    Apply Changes
                  </button>
                </div>
              </div>

              {/* Add New Admin */}
              <div className="settings-card">
                <h2>🛡 Add New Admin</h2>

                <p>
                  Grant administrator access to another registered user
                  using their email address.
                </p>

                <form onSubmit={handleAddAdmin}>
                  <div className="form-group">
                    <label htmlFor="adminEmail">Admin Email Address</label>

                    <input
                      id="adminEmail"
                      type="email"
                      placeholder="Enter registered user's email"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="button-row">
                    <button
                      className="apply-btn"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Adding Admin..." : "+ Add Admin"}
                    </button>
                  </div>

                  {adminMessage && (
                    <p role="status" aria-live="polite">
                      {adminMessage}
                    </p>
                  )}
                </form>
              </div>

              {/* Inference Engine */}
              <div className="settings-card">
                <h2>⚙️ Inference Engine Parameters</h2>

                <div className="slider-box">
                  <label>Liveness Confidence Threshold</label>

                  <p>
                    Determine the minimum probability score required to
                    validate a live subject.
                  </p>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="98"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;