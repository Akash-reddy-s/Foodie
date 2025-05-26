// Login.js
import React from "react";
import "./Login.css"; // Import your Login-specific styles
import validateform from "./LoginAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      navigate("/admin");
    } else {
      if (validateform(username, password)) {
        navigate("/home");
      }
    }
  };

  return (
    <div className="login-container"> {/* Use a specific class for the login page container */}
      <div className="login-box">
        <h2>Login</h2>
        <form className="form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="inp"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
          />
          <br /> <br />
          <input
            type="password"
            placeholder="Password"
            className="inp"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <br />
          <button type="submit" className="logbtn">
            Login
          </button>
          <p className="foot">Rights Reserved | Hejax Technologies</p>
        </form>
      </div>
    </div>
  );
};

export default Login;