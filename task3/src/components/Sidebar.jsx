import React from "react";
import { Link } from "react-router-dom";
import "./../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>HR Dashboard</h2>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3</Link>
        <Link to="/send-email">Send Email</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
