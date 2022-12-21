import React, { useContext } from "react";
import { UserContext } from "./App";
import { Link } from "react-router-dom";

function NavBar({ handleLogOut }) {
  const linkStyling = { padding: "10px" };
  const { currentUser } = useContext(UserContext);

  function tutorLinks() {
    return (
      <>
        <Link as={Link} to="/students" style={linkStyling}>
          Students
        </Link>
        <Link as={Link} to="/findstudents" style={linkStyling}>
          Find Students
        </Link>
      </>
    );
  }

  function studentLinks() {
    return (
      <>
        <Link as={Link} to="/tutors" style={linkStyling}>
          Tutors
        </Link>
        <Link as={Link} to="/assignments" style={linkStyling}>
          Assignments
        </Link>
      </>
    );
  }

  return (
    <nav>
      <Link as={Link} to="/" style={linkStyling}>
        Tutor Plus
      </Link>
      {/* check if tutor or student, display proper links */}
      {currentUser.type === "Tutor"
        ? tutorLinks()
        : currentUser.type === "Student"
        ? studentLinks()
        : null}
      {/* check if logged in, display proper buttons */}
      {currentUser.type ? (
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
