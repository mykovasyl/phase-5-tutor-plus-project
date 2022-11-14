import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const linkStyling = { padding: "10px" };

  return (
    <nav>
      <Link as={Link} to="/" style={linkStyling}>
        Tutor Plus
      </Link>
      <Link as={Link} to="/" style={linkStyling}>
        Home
      </Link>
      <Link as={Link} to="/students" style={linkStyling}>
        Students
      </Link>
      <Link as={Link} to="/assignwork" style={linkStyling}>
        Assign work
      </Link>
    </nav>
  );
}

export default NavBar;
