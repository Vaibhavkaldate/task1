import React from "react";
import Sidebar from "./Sidebar";
import "./../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="content">
        <h1>Welcome to the HR Dashboard</h1>
        <p>This is HR dashboard</p>
      </main>
    </div>
  );
};

export default Dashboard;
