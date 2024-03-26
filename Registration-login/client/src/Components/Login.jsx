import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import {Link, useNavigate} from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    }).then(response => {
      if(response.data.status){
          navigate('/')
      }
      }).catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
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

        <button type="submit">Login</button>
        <Link to="/forgotPassword">Forgot Password?</Link>
        <p>Don't Have Account?<Link to='/signup'>Sign Up</Link></p> 
      </form>
    </div>
  );
};

export default Signup;
