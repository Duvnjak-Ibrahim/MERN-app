import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import("./styles/Signup.css")
const { constants } = require('./constants');

function Signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    
    axios.post(`http://localhost:${constants.localHost}/api/users/register`, {
        username,
        email,
        password,
      },{
        headers: {
          'Content-Type': 'application/json', // Adjust as needed
        }}
        )
      .then(res => {
        navigate('/login');
      })
      .catch(err => console.log("bug here",err));
  };

  return (
    <div className="main-container">
      <div className="formThing">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="formy1">
            <label htmlFor="email">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Username"
              autoComplete="off"
              name="username"
              required=""
              
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="formy1">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Email"
              autoComplete="off"
              name="email"
              required

              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="formy1">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required

              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Register
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link
          to="/login"
          className="btn"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;





