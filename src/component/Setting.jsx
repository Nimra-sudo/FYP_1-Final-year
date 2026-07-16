import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../App.css";

function Setting() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="settings-page">

          {/* Heading */}

          <div className="settings-header">
            <h1>System Settings</h1>

            <p>
              Configure global application parameters, diagnostic thresholds,
              and security controls for your SecureFace AI deployment.
            </p>
          </div>

          <div className="settings-wrapper">

            {/* Left Menu */}

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

            {/* Right Content */}

            <div className="settings-content">

              {/* Camera */}

              <div className="settings-card">

                <h2>📷 Camera Settings</h2>

                <p>
                  Manage video feed inputs and adjust optical properties for
                  optimal capture.
                </p>

                <div className="form-row">

                  <div className="form-group">
                    <label>Input Device</label>

                    <select>
                      <option>
                        Integrated Webcam (04F2:B5F7)
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Capture Resolution</label>

                    <select>
                      <option>1920 × 1080 (1080p HD)</option>
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

                    <input
                      type="checkbox"
                      defaultChecked
                    />

                    <span className="slider"></span>

                  </label>

                </div>

                <div className="button-row">

                  <button className="reset-btn">
                    Reset Defaults
                  </button>

                  <button className="apply-btn">
                    Apply Changes
                  </button>

                </div>

              </div>

              {/* Inference */}

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