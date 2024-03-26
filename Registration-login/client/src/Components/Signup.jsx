import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import {Link, useNavigate} from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    }).then(response => {
      if(response.data.status){
          navigate('/login')
      }
      }).catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="email">Email:</label>
        <input
          type="email"
          placeholder="email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="password">Password:</label>
        <input
          type="password"
          placeholder="**********"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
        <p>Have an Account?<Link to='/login'>Login</Link></p> 
      </form>
    </div>
  );
};

export default Signup;
