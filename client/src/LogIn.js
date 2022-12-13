import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn({ setCurrentUser }) {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleInputChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((loggedInUser) => {
          setCurrentUser(loggedInUser);
          navigate("/");
        });
      } else {
        alert("Invalid username or password");
      }
    });
  }

  return (
    <div>
      <h1>Log in here:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={login.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
