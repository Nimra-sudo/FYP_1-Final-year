import {
  HiOutlineSquares2X2,
  HiOutlineVideoCamera,
  HiOutlineDocumentText,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { FaFingerprint, FaUserShield } from "react-icons/fa6";
import { FiHelpCircle, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Image1 from "../assets/Image1.jpg";


function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-logo">
  <img src={Image1} alt="Image1" className="sidebar-logo-img" />

  <div>
    <h2>Real-Time Face</h2>
    <p>Liveness Detection For Secure Authentication</p>
  </div>
</div>

        <button className="quick-btn">
          <FaFingerprint />
          Quick Scan
        </button>

        <div className="menu">
          <div
            className="menu-item active"
            onClick={() => navigate("/dashboard")}
          >
            <HiOutlineSquares2X2 />
            Dashboard
          </div>

         <div
  className="menu-item"
  onClick={() => navigate("/capture")}
>
  <span>📷</span>
  <p>Live Capture</p>
</div>

          <div
            className="menu-item"
            onClick={() => navigate("/log")}
          >
            <HiOutlineDocumentText />
            Logs
          </div>

          <div
  className="menu-item"
  onClick={() => navigate("/admin")}
>
  <FaUserShield />
  Admin
</div>

          <div
  className="menu-item"
  onClick={() => navigate("/settings")}
>
  <HiOutlineCog6Tooth />
  Settings
</div>
        </div>
      </div>

      <div className="bottom-menu">
        <div className="menu-item">
          <FiHelpCircle />
          Help Center
        </div>

        <div
          className="menu-item"
          onClick={() => navigate("/")}
        >
          <FiLogOut />
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;