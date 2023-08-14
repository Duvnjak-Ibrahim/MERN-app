import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./styles/Login.css"
const { constants } = require('./constants');

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`http://localhost:${constants.localHost}/api/users/login`, {
      email,
      password,
    }
      )
      .then((req,res) => {
        console.log('login: ' + req.status);
          if (req.status === 200 ) {
            navigate('/dashboard');
          } else {
            navigate('/');
          }
        
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="main-container1">
      <div className="formThing1">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="formy11">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Email"
              autoComplete="off"
              name="email"
              
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="formy11">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn1">
            Login
          </button>
        </form>
        <p>Dont have an Account</p>
        <Link
          to="/register"
          className="btn1"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
