import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home({ currentUser, setCurrentUser }) {
  // const [loggedInUser, setLoggedInUser] = useState(null);
  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

  const handleLogOut = () => {
    setCurrentUser({});
    console.log(currentUser);
    fetch("/logout", {
      method: "DELETE",
    });
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
