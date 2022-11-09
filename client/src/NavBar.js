import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const linkStyling = { color: "black" };

  return (
    <nav bg="dark" variant="dark" className="flex-row justify-content-center">
      <Link
        as={Link}
        to="/"
        style={{ marginRight: "auto", paddingLeft: "15px" }}
      >
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
