import React, { useContext } from "react";
import { UserContext } from "./App";
import { Link } from "react-router-dom";

function Home({ handleLogOut }) {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <h1>Tutor Plus</h1>
      <h3>An application for assigning homework to your students!</h3>
      <p>
        Upload homework for students to complete. They will be able to download
        it and upload back the completed version.
      </p>
      {Object.keys(currentUser).length !== 0 ? (
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
