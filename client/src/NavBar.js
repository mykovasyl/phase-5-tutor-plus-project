import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const linkStyling = { color: "white" };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="flex-row justify-content-center"
    >
      <Navbar.Brand
        as={Link}
        to="/"
        style={{ marginRight: "auto", paddingLeft: "15px" }}
      >
        Tutor Plus
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/" style={linkStyling}>
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about" style={linkStyling}>
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/contactus" style={linkStyling}>
          Contact Us
        </Nav.Link>
        {/* <Nav.Link
          as={Link}
          to="/"
          style={{ marginRight: "10px", color: "white" }}
        >
          Children
        </Nav.Link> */}
      </Nav>
    </Navbar>
  );
}

export default NavBar;
