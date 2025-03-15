import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="sidebar">
      <div className="logo">Dashboard</div>
      <Link to="/" className={`menu-item ${location.pathname === "/" ? "active" : ""}`}>
        <i className="icon">🏠</i> Home
      </Link>
      <Link to="/about" className={`menu-item ${location.pathname === "/about" ? "active" : ""}`}>
        <i className="icon">ℹ️</i> About
      </Link>
      <Link to="/settings" className={`menu-item ${location.pathname === "/settings" ? "active" : ""}`}>
        <i className="icon">⚙️</i> Settings
      </Link>
      <Link to="/profile" className={`menu-item ${location.pathname === "/profile" ? "active" : ""}`}>
        <i className="icon">👤</i> Profile
      </Link>
    </div>
  );
};

export default Sidebar;
