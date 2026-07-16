import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../App.css";

function Admin() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="admin-page">
          <div className="admin-header">
            <div>
              <h1>System Administration</h1>
              <p>
                Manage models, users, and monitor overall LivenessGuard
                infrastructure.
              </p>
            </div>

            <button className="export-report-btn">
              Export Report
            </button>
          </div>

          {/* Top Cards */}
          <div className="admin-top-cards">
            {/* Core Status */}
            <div className="admin-card">
              <div className="card-title">
                <h3>Core Status</h3>
                <span className="live-tag">Live</span>
              </div>

              <h1 className="uptime">99.98%</h1>
              <p>Uptime across 4 regional clusters.</p>

              <div className="metric-row">
                <span>API Latency (avg)</span>
                <span>42ms</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <div className="metric-row">
                <span>Error Rate</span>
                <span>0.02%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill error"></div>
              </div>
            </div>

            {/* Architecture */}
            <div className="admin-card architecture-card">
              <div className="card-title">
                <h3>Model Architecture: VisionCore v3.1</h3>
                <span className="view-link">
                  View Weights
                </span>
              </div>

              <div className="architecture-grid">
                <div className="info-box">
                  <span>Input Layer</span>
                  <p>224x224x3 (RGB)</p>
                </div>

                <div className="info-box">
                  <span>BPCER</span>
                  <p>0.05%</p>
                </div>

                <div className="info-box">
                  <span>Conv Blocks</span>
                  <p>Residual 50-layer</p>
                </div>

                <div className="info-box">
                  <span>APCER</span>
                  <p>0.12%</p>
                </div>

                <div className="info-box">
                  <span>Classifier Head</span>
                  <p>Softmax (Spoof/Real)</p>
                </div>

                <div className="info-box">
                  <span>Inference Time</span>
                  <p>18ms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Flags Table */}
          <div className="security-card">
            <div className="security-header">
              <h2>Recent Security Flags</h2>
            </div>

            <table className="security-table">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Event ID</th>
                  <th>Attack Type (Suspected)</th>
                  <th>Confidence</th>
                  <th>Action Taken</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>2023-10-27 14:22:01</td>
                  <td>EVT-992-A</td>
                  <td>🔴 2D Print Attack</td>
                  <td>99.2%</td>
                  <td>
                    <span className="blocked-tag">
                      Blocked
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>2023-10-27 14:15:33</td>
                  <td>EVT-991-B</td>
                  <td>🟠 Deepfake Video Replay</td>
                  <td>94.8%</td>
                  <td>
                    <span className="blocked-tag">
                      Blocked
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>2023-10-27 13:52:10</td>
                  <td>EVT-990-C</td>
                  <td>🟡 Mask Presentation</td>
                  <td>87.5%</td>
                  <td>
                    <span className="blocked-tag">
                      Investigating
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;