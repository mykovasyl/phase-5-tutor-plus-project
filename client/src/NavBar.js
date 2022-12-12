import React from "react";
import { Link } from "react-router-dom";

function NavBar({ currentUser, handleLogOut }) {
  const linkStyling = { padding: "10px" };

  return (
    <nav>
      <Link as={Link} to="/" style={linkStyling}>
        Tutor Plus
      </Link>
      {/* check if tutor or student, display proper links */}
      {/* {currentUser.type === "tutor" ? (
        <>
          <Link as={Link} to="/students" style={linkStyling}>
            Students
          </Link>
        </>
      ) : currentUser.type === "student" ? (
        <>
          <Link as={Link} to="/tutors" style={linkStyling}>
            Tutors
          </Link>
          <Link as={Link} to="/assignments" style={linkStyling}>
            Assignments
          </Link>
        </>
      ) : null} */}
      {/* check if logged in, display proper buttons */}
      {currentUser ? (
        <>
          <Link as={Link} to="/profile" style={linkStyling}>
            <button>Profile</button>
          </Link>
          <button onClick={handleLogOut}>Log out</button>
        </>
      ) : (
        <>
          <Link as={Link} to="/login" style={linkStyling}>
            Log in
          </Link>
          <Link as={Link} to="/signup" style={linkStyling}>
            Sign up
          </Link>
        </>
      )}
    </nav>
  );
}

export default NavBar;
