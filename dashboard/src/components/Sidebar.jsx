import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>VehicleVista</h2>
      <nav>
        <ul>
          <li><NavLink to="/" end>🏠 Home</NavLink></li>
          <li><NavLink to="/assign-vehicle">🚗 Assign Vehicle</NavLink></li>
          <li><NavLink to="/release-booking">📅 Release Booking</NavLink></li>
          <li><NavLink to="/update-booking">✏️ Update Booking</NavLink></li>
          <li><NavLink to="/add-driver">👤 Add Driver</NavLink></li>
          <li><NavLink to="/add-vehicle">🚙 Add Vehicle</NavLink></li>
          <li><NavLink to="/add-location">📍 Add Location</NavLink></li>
          <li><NavLink to="/about-us">ℹ️ About Us</NavLink></li>
          <li><NavLink to="/settings">⚙️ Settings</NavLink></li>
          <li><NavLink to="/logout" className="logout">🔴 Logout</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
