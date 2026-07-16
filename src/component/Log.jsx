import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../App.css";

function Log() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="logs-page">
          <div className="logs-header">
            <div>
              <h1>System Logs</h1>
              <p>
                Comprehensive audit trail of all prediction requests and
                system events.
              </p>
            </div>

            <div className="logs-actions">
              <input
                type="text"
                placeholder="Search logs..."
                className="search-input"
              />

              <button className="export-btn">
                Export PDF
              </button>

              <button className="export-btn">
                Export CSV
              </button>
            </div>
          </div>

          <div className="filter-row">
            <span className="filter-tag">
              Status: Verified ✕
            </span>

            <span className="filter-tag">
              Date: Last 7 Days ✕
            </span>

            <span className="clear-filter">
              Clear All
            </span>
          </div>

          <div className="logs-table-card">
            <table className="logs-table">
              <thead>
                <tr>
                  <th>LOG ID</th>
                  <th>USER / SUBJECT</th>
                  <th>TIMESTAMP</th>
                  <th>PREDICTION</th>
                  <th>CONFIDENCE</th>
                  <th>IP ADDRESS</th>
                  <th>STATUS</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#LG-99382</td>

                  <td>
                    <strong>Nimra</strong>
                    <br />
                    <small>usr_382jks</small>
                  </td>

                  <td>
                    Oct 24, 2023
                    <br />
                    14:32:01 UTC
                  </td>

                  <td>
                    <span className="badge live">
                      Live Person
                    </span>
                  </td>

                  <td>99.8%</td>

                  <td>192.168.1.45</td>

                  <td>
                    <span className="status verified">
                      Verified
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>#LG-99381</td>

                  <td>
                    <strong>Haris</strong>
                    <br />
                    <small>usr_772klp</small>
                  </td>

                  <td>
                    Oct 24, 2023
                    <br />
                    14:28:44 UTC
                  </td>

                  <td>
                    <span className="badge spoof">
                      Spoof Attempt
                    </span>
                  </td>

                  <td>12.4%</td>

                  <td>10.0.0.221</td>

                  <td>
                    <span className="status rejected">
                      Rejected
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>#LG-99380</td>

                  <td>
                    <strong>Nimrata</strong>
                    <br />
                    <small>api_anon</small>
                  </td>

                  <td>
                    Oct 24, 2023
                    <br />
                    14:15:09 UTC
                  </td>

                  <td>
                    <span className="badge inconclusive">
                      Inconclusive
                    </span>
                  </td>

                  <td>68.1%</td>

                  <td>172.16.0.4</td>

                  <td>
                    <span className="status flagged">
                      Flagged
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="pagination">
              <p>
                Showing 1 to 10 of 1,248 logs
              </p>

              <div className="pages">
                <button>{"<"}</button>
                <button className="active-page">
                  1
                </button>
                <button>2</button>
                <button>3</button>
                <button>{">"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Log;