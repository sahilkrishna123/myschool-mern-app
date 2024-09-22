// src/components/Dashboard.js
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Sidebar from '../components/Sidebar.jsx';
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Clear the cookie
    navigate("/login"); // Redirect to login page
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token"); // Fetch token from localStorage
      try {
        const response = await axios.get("http://localhost:5000/api/v1/users/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });
        setDashboardData(response.data); // Set the data from the response
      } catch (err) {
        console.error("Error fetching dashboard data", err);
        if (err.response && err.response.status === 401) {
          navigate("/login"); // Redirect to login if unauthorized
        }
      }
    };

    fetchDashboardData();
  }, [navigate]);

  console.log(dashboardData);

  return (
    <div>
      {/* <h2>Dashboard</h2> */}
      <Sidebar />
      {/* {dashboardData ? (
        <div>
          <p>Welcome</p>
          <button onClick={() => navigate("/schools")}>The Schools</button>
          <button onClick={() => navigate("/profile")}>Your Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )} */}

    </div>
  );
};

export default Dashboard;
