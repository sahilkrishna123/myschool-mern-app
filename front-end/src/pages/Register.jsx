// src/components/Register.js
import { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // State for success message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset success and error messages before submission
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Send POST request to the server
      const response = await axios.post('http://localhost:5000/api/v1/users/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        passwordConfirm: formData.confirmPassword,
        // role: formData.role 
      });

      // Display success message
      if (response.status === 201) {
        setSuccess('Registration successful!'); // Show success message
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: 'student' 
        });
      }
    } catch (err) {
        console.log(err);
        
      // Handle error response
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="register-container">
      <h2>User Registration</h2>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>} {/* Display success message */}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name"  
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">User Role</label>
          <select 
            id="role" 
            name="role" 
            value={formData.role} 
            onChange={handleChange} 
            required
          >
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
