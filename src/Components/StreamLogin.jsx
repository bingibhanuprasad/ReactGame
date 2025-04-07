import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 import "./StreamLogin.css";
 import { FaVideo } from "react-icons/fa";


const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ text: "", color: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

   
    axios.get("https://signupuser-72c40-default-rtdb.firebaseio.com/StreamRegister.json")
      .then((response) => {
        const users = response.data;
        let foundUser = null;

       
        for (let key in users) {
          if (users[key].email === loginData.email && users[key].password === loginData.password) {
            foundUser = users[key];
            break;
          }
        }

        if (foundUser) {
          setMessage({ text: "Login Successful! Redirecting...", color: "green" });

       
          setTimeout(() => {
            navigate("/Home");  
          }, 2000);
        } else {
          setMessage({ text: "Invalid email or password!", color: "red" });
        }
      })
      .catch(() => {
        setMessage({ text: "Login failed. Please try again.", color: "red" });
      });
  };

  return (
    <div className="login-container">
 
      <div className="login-box">
          <div className="element">
                  <FaVideo className="logo" />
                </div>

             <h2>Streamer Login...!</h2>
        {message.text && <p style={{ color: message.color }}>{message.text}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input 
              type="email" 
              name="email" 
              value={loginData.email} 
              onChange={handleChange} 
              required 
              placeholder="Enter your Email" 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              name="password" 
              value={loginData.password} 
              onChange={handleChange} 
              required 
              placeholder="Enter Password" 
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-text">
          Don't have an account? <Link to="/StreamSignup" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
