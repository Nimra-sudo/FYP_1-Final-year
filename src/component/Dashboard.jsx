import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function Dashboard() {
  const data = {
    labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"],
    datasets: [
      {
        label: "Authentications",
        data: [1, 2, 3, 2, 4, 3, 4],
        borderColor: "#082b91",
        backgroundColor: "rgba(8,43,145,0.12)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#082b91",
        pointBorderColor: "#082b91",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
        grid: {
          color: "#ececec",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        {/* Top Cards */}
        <div className="stats-row">
          <div className="stat-card">
            <p>TODAY'S AUTHS</p>
            <h2>4</h2>
          </div>

          <div className="stat-card">
            <p>SUCCESSFUL</p>
            <h2>3</h2>
          </div>

          <div className="stat-card failed">
            <p>FAILED ATTEMPTS</p>
            <h2>1</h2>
          </div>

          <div className="stat-card">
            <p>REAL FACES</p>
            <h2>3</h2>
          </div>

          <div className="stat-card spoof">
            <p>SPOOF / FAKE</p>
            <h2>0</h2>
          </div>
        </div>

        {/* Charts Section */}
        <div className="middle-section">
          <div className="activity-card">
            <h2>Activity Trends</h2>
            <p>Authentication volume over last 24 hours</p>

            <div className="chart-container">
              <Line data={data} options={options} />
            </div>
          </div>

          <div className="analysis-card">
            <h2>Analysis Breakdown</h2>
            <p>Classification distribution</p>

            <div className="circle-chart">
              <div className="circle-inner">
                <h1>97%</h1>
                <span>Authentic</span>
              </div>
            </div>

            <div className="legend">
              <p>🔵 Verified Real &nbsp;&nbsp; 3</p>
              <p>🟤 Detected Spoof &nbsp;&nbsp; 0</p>
              <p>⚪ Inconclusive &nbsp;&nbsp; 1</p>
            </div>
          </div>
        </div>
                {/* Bottom Section */}
        <div className="bottom-section">
          <div className="table-card">
            <div className="table-header">
              <h2>Recent Authentications</h2>
              <span>View All Logs</span>
            </div>

            <table>
              <thead>
                <tr>
                  <th>TIMESTAMP</th>
                  <th>SESSION ID</th>
                  <th>SCORE</th>
                  <th>RESULT</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>10:42:05</td>
                  <td>sess_8f92a1b...</td>
                  <td>0.98</td>
                  <td>
                    <button className="pass-btn">Pass</button>
                  </td>
                </tr>

                <tr>
                  <td>10:41:12</td>
                  <td>sess_3c44d9f...</td>
                  <td>0.95</td>
                  <td>
                    <button className="pass-btn">Pass</button>
                  </td>
                </tr>

                <tr>
                  <td>10:38:55</td>
                  <td>sess_99a1b2c...</td>
                  <td>0.12</td>
                  <td>
                    <button className="spoof-btn">
                      Spoof Detected
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="alerts-card">
            <h2>System Alerts</h2>

            <div className="alert-box">
              <h4>Model Update Available</h4>
              <p>
                v2.4 weights are ready for deployment.
                Expected accuracy increase: +0.2%.
              </p>
            </div>

            <div className="alert-box warning">
              <h4>Elevated Spoof Attempts</h4>
              <p>
                Spike detected from IP range 192.168.x.x.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;