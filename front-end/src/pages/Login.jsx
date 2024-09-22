// src/components/Login.js
import { useState } from "react";
import axios from "axios";
import "../styles/Login.css"; // Assuming CSS is in the same styles folder
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // src/components/Login.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Send POST request to login endpoint
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.status === 200) {
        const { token } = response.data; // Get the token from response
        localStorage.setItem("token", token); // Store the token in localStorage

        setSuccess("Login successful! Redirecting...");
        setFormData({
          email: "",
          password: "",
        });

        setTimeout(() => {
          navigate("/dashboard"); // Redirect to dashboard after a short delay
        }, 1000); // 1 second delay for user feedback
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Display specific backend error message
      } else {
        setError("Login failed. Please check your credentials."); // Fallback error
      }
    }
  };

  return (
    // <div className="login-container">
    //   <h2>User Login</h2>

    //   {error && <p className="error">{error}</p>}
    //   {success && <p className="success">{success}</p>}

    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label htmlFor="email">Email</label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         value={formData.password}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <button type="submit" className="submit-button">
    //       Login
    //     </button>
    //   </form>
    // </div>
    <>
      <div>
        <div className="h-auto mx-auto my-10 w-80 bg-slate-100 p-4">
          <h1 className="text-center">Logo Image</h1>
          <h1 className="text-2xl my-4 font-bold text-slate-800">
            Welcome Back!
          </h1>
          <p className="text-sm mb-4">Please Enter your details</p>
          <div className="flex flex-col itmes gap-4">
            <div>
              <h3 className="font-bold">Email</h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 p-2"
              />
            </div>
            <div>
              <h3 className="font-bold">Password</h3>
              <input
                type="password"
                placeholder="Enter your password"
                className="h-11 p-2"
              />
            </div>
            <button className="bg-emerald-600 rounded-sm w-full mt-6 p-2 mx-auto text-slate-200 hover:bg-emerald-900">
              Login
            </button>
            <p>
              Dont have account?{" "}
              <a href="/register" className="text-blue-500">
                Register here
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
