import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home({ currentUser, setCurrentUser }) {
  // const [loggedInUser, setLoggedInUser] = useState(null);
  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);
  const navigate = useNavigate();

  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div>
      <h1>Tutor Plus</h1>
      <h3>An application for assigning homework to your students!</h3>
      <p>
        Upload homework for students to complete. They will be able to download
        it and upload back the completed version.
      </p>
      {currentUser ? (
        <>
          <p>Welcome back, {currentUser.name}</p>
          <button onClick={handleLogOut}>Log out</button>
        </>
      ) : (
        <>
          <Link to="signup" style={{ marginRight: "10px" }}>
            Sign up today!
          </Link>
          <Link to="login">Log in</Link>
        </>
      )}
    </div>
  );
}

export default Home;
