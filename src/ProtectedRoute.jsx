
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, adminOnly = false }) {
  const storedUser = sessionStorage.getItem("user");

  if (!storedUser) {
    return <Navigate to="/" replace />;
  }

  let user;

  try {
    user = JSON.parse(storedUser);
  } catch {
    sessionStorage.removeItem("user");
    return <Navigate to="/" replace />;
  }

  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default ProtectedRoute;
