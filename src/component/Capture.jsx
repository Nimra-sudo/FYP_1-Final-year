import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../App.css";


import {
  FaDownload,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaImage,
  FaEye,
  FaShieldAlt,
  FaCamera,
} from "react-icons/fa";

function Capture() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="pipeline-page">

          {/* Header */}

          <div className="pipeline-header">

            <div>
              <h1>Image Processing Pipeline</h1>

              <p>
                Visual representation of the face liveness detection workflow.
              </p>
            </div>

            <div className="pipeline-actions">

              <button className="export-btn">
                <FaDownload />
                Export Log
              </button>

              <button className="analysis-btn">
                Proceed to Analysis
                <FaArrowRight />
              </button>

            </div>

          </div>

          {/* Main Grid */}

          <div className="pipeline-grid">

            {/* LEFT */}

            <div>

              {/* Pipeline Status */}

              <div className="pipeline-card">

                <h2>Pipeline Status</h2>

                <div className="pipeline-list">

                  <div className="pipeline-item active">

                    <div className="pipeline-icon">
                      <FaCamera />
                    </div>

                    <div className="pipeline-info">

                      <h3>1. Image Acquisition</h3>

                      <p>
                        Live face image captured successfully.
                      </p>

                    </div>

                    <FaCheckCircle className="done-icon" />

                  </div>


                  <div className="pipeline-item">

                    <div className="pipeline-icon blue">
                      <FaImage />
                    </div>

                    <div className="pipeline-info">

                      <h3>2. Pre-processing</h3>

                      <p>
                        Face alignment and normalization.
                      </p>

                    </div>

                    <FaClock className="wait-icon" />

                  </div>


                  <div className="pipeline-item">

                    <div className="pipeline-icon purple">
                      <FaEye />
                    </div>

                    <div className="pipeline-info">

                      <h3>3. Feature Extraction</h3>

                      <p>
                        Extracting facial texture features.
                      </p>

                    </div>

                    <FaClock className="wait-icon" />

                  </div>


                  <div className="pipeline-item">

                    <div className="pipeline-icon green">
                      <FaShieldAlt />
                    </div>

                    <div className="pipeline-info">

                      <h3>4. Classification</h3>

                      <p>
                        Live or spoof decision.
                      </p>

                    </div>

                    <FaClock className="wait-icon" />

                  </div>

                </div>

              </div>


              {/* Metadata */}

              <div className="metadata-card">

                <h2>Capture Metadata</h2>

                <div className="meta-grid">

                  <div className="meta-box">
                    <span>Resolution</span>
                    <h3>1920 × 1080</h3>
                  </div>

                  <div className="meta-box">
                    <span>Format</span>
                    <h3>JPEG</h3>
                  </div>

                  <div className="meta-box">
                    <span>Lighting</span>
                    <h3>Good</h3>
                  </div>

                  <div className="meta-box">
                    <span>Face Detected</span>
                    <h3>Yes</h3>
                  </div>

                </div>

              </div>

            </div>
                        {/* RIGHT */}

            <div className="visual-card">

              <h2>Visual Transformation</h2>

              <div className="image-flow">

                {/* Original */}

                <div className="flow-box">

                  <h4>Original Image</h4>

                  <div className="flow-image">

                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4i015yez4fpYP9qVpkmsaUWoPtYj0pPnxVTHjSudIg&s=10"
                      alt="Original"
                    />

                  </div>

                </div>

                <div className="flow-arrow">
                  ➜
                </div>

                {/* Face Detection */}

                <div className="flow-box">

                  <h4>Face Detection</h4>

                  <div className="flow-image">

                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4i015yez4fpYP9qVpkmsaUWoPtYj0pPnxVTHjSudIg&s=10"
                      alt="Detection"
                    />

                  </div>

                </div>

                <div className="flow-arrow">
                  ➜
                </div>

                {/* Feature Map */}

                <div className="flow-box">

                  <h4>Feature Map</h4>

                  <div className="flow-image">

                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4i015yez4fpYP9qVpkmsaUWoPtYj0pPnxVTHjSudIg&s=10"
                      alt="Feature"
                    />

                  </div>

                </div>

              </div>

              <div className="analysis-summary">

                <h3>Pipeline Summary</h3>

                <p>
                  The captured facial image successfully passes through the
                  acquisition stage and is prepared for preprocessing,
                  feature extraction, and final liveness classification.
                </p>

                <div className="summary-grid">

                  <div className="summary-box">
                    <span>Status</span>
                    <h4>Processing</h4>
                  </div>

                  <div className="summary-box">
                    <span>Confidence</span>
                    <h4>99.8%</h4>
                  </div>

                  <div className="summary-box">
                    <span>Prediction</span>
                    <h4>Real Face</h4>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Capture;