import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import "./App.css";
  import Log from "./component/Log";
    import Admin from "./component/Admin";
import Setting from "./component/Setting";
import Signup from "./component/Signup";
import Capture from "./component/Capture";
    import AccessGranted from "./component/AccessGranted";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/log" element={<Log />} />
       <Route path="/admin" element={<Admin />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/signup" element={<Signup />} />
    <Route path="/capture" element={<Capture />} />
   <Route path="/access-granted" element={<AccessGranted />} />


    </Routes>
  </BrowserRouter>
);