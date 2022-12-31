import React, { useContext } from "react";
import { UserContext } from "./App";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function NavBar({ handleLogOut }) {
  const linkStyling = { padding: "10px", color: "white" };
  const { currentUser } = useContext(UserContext);

  function tutorLinks() {
    return (
      <Nav>
        <Nav.Link as={Link} to="/students" style={linkStyling}>
          Students
        </Nav.Link>
        <Nav.Link as={Link} to="/findstudents" style={linkStyling}>
          Find Students
        </Nav.Link>
      </Nav>
    );
  }

  // not currently in use
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
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand
        as={Link}
        to="/"
        style={{ paddingLeft: "15px", color: "white" }}
      >
        Tutor Plus
      </Navbar.Brand>
      {/* check if tutor or student, display proper links */}
      {currentUser.type === "Tutor"
        ? tutorLinks()
        : currentUser.type === "Student"
        ? studentLinks()
        : null}
      {/* check if logged in, display proper buttons */}
      <Container className="justify-content-end">
        {currentUser.type ? (
          <>
            <Nav.Link as={Link} to="/profile" style={linkStyling}>
              <button>Profile</button>
            </Nav.Link>
            <button onClick={handleLogOut}>Log out</button>
          </>
        ) : (
          <>
            <Nav.Link as={Link} to="/login" style={linkStyling}>
              Log in
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" style={linkStyling}>
              Sign up
            </Nav.Link>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;
