import React from "react";
import { FaUser, FaCoins, FaUserShield, FaGoogle, FaFacebook, FaPhone, FaVideo } from "react-icons/fa";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="card">
        {/* Logo */}
        <div className="element">
          <FaVideo className="logo" />
        </div>

        {/* Header */}
        <div className="element">
          <h1>Choose Your Role</h1>
        </div>

        {/* Streamer Login */}
        <div className="element">
          <Link to="/Streamlogin">
            <button className="role-btn">
              <FaUser className="icon" />
              <div className="text-container">
                <span className="highlight">Streamer Login</span>
                <span className="description">Start Streaming and grow your audience</span>
              </div>
            </button>
          </Link>
        </div>

        {/* Coin Seller Login */}
        <div className="element">
          <Link to="/CoinSellerLogin">
            <button className="role-btn">
              <FaCoins className="icon" />
              <div className="text-container">
                <span className="highlight">Coin Seller Login</span>
                <span className="description">Manage your coin transactions</span>
              </div>
            </button>
          </Link>
        </div>

        {/* Admin Login */}
        <div className="element">
          <Link to="/AdminLogin">
            <button className="role-btn">
              <FaUserShield className="icon" />
              <div className="text-container">
                <span className="highlight">Admin Login</span>
                <span className="description">Access platform management</span>
              </div>
            </button>
          </Link>
        </div>

        {/* Social Login Options */}
        <div className="element social-icons">
          <div className="social-icon-wrapper">
            <FaGoogle className="social-icon google" />
          </div>
          <div className="social-icon-wrapper">
            <FaFacebook className="social-icon facebook" />
          </div>
          <div className="social-icon-wrapper">
            <FaPhone className="social-icon phone" />
          </div>
        </div>

        {/* Mobile Login */}
        <div className="element">
          <button className="login-button">Login with Mobile Number</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
