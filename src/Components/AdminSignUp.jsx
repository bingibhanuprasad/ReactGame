import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaVideo } from "react-icons/fa";


const AdminSignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState({ text: "", color: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();  
 
    if (!signUpData.name || !signUpData.email || !signUpData.password || !signUpData.confirmPassword) {
      setMessage({ text: "Please enter all fields!", color: "red" });
      return;
    }

  
    if (signUpData.password !== signUpData.confirmPassword) {
      setMessage({ text: "Passwords do not match!", color: "red" });
      return;
    }

    axios
      .post('https://signupuser-72c40-default-rtdb.firebaseio.com/AdminRegister.json', signUpData)
      .then(() => {
        setMessage({ text: "Signup Successful! Redirecting to Login...", color: "green" });
 
        setSignUpData({ name: "", email: "", password: "", confirmPassword: "" });
        
        setTimeout(() => {
          navigate('/AdminLogin');
        }, 1000);
      })
      .catch(() => {
        setMessage({ text: "Signup failed. Try again!", color: "red" });
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
          <div className="element">
                  <FaVideo className="logo" />
                </div>
        <h2> Admin Sign Up</h2>
        {message.text && <p style={{ color: message.color }}>{message.text}</p>}
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <input 
              type="text" 
              name="name" 
              value={signUpData.name} 
              onChange={handleChange} 
              required 
              placeholder="Enter your Name" 
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              name="email" 
              value={signUpData.email} 
              onChange={handleChange} 
              required 
              placeholder="Enter your Email" 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              name="password" 
              value={signUpData.password} 
              onChange={handleChange} 
              required 
              placeholder="Enter Password" 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              name="confirmPassword" 
              value={signUpData.confirmPassword} 
              onChange={handleChange} 
              required 
              placeholder="Confirm Password" 
            />
          </div>
          <button type="submit" className="login-btn">Sign Up</button>
        </form>
        <p className="signup-text">
          Already have an account? <Link to="/AdminLogin" className="signup-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminSignUp;
