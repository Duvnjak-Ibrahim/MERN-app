import "./styles/Home.css"
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

  const handleRegisterClick = function(where) {
      navigate(`/${where}`); 
  }

  
    return (
        <div className="home-container">
      <div className="left-section">
        <div className="left-content">
          <h1>Welcome to new social media app called Mygram</h1>
        </div>
      </div>
      <div className="right-section">
        <div className="right-content">
          <h2>About Mygram</h2>
          <p>Mygram is a brand new social media platform where you can connect with friends, share your moments, and discover new things.</p>
          <Link className="register-button" to="/register">Register</Link>
          <Link className="login-button" to="/login">Log In</Link>
        </div>
      </div>
    </div>
     )
    }
    
    export default Home;


