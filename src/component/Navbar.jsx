import { FiBell, FiSettings } from "react-icons/fi";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <h1>Real Face Detector</h1>

        <div className="status">
          <span className="dot"></span>
          System: Optimal
        </div>
      </div>

      <div className="nav-right">
        <FiBell />
        <FiSettings />

        <div className="profile"></div>
      </div>
    </div>
  );
}

export default Navbar;