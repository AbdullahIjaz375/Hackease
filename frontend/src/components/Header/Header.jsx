import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons"; // Import the desired icon
import "./Header.css";

const Header = ({ user }) => {
  return (
    <Navbar
      expand="lg"
      bg="primary"
      data-bs-theme="dark"
      variant="dark"
      className="header-navbar"
    >
      <Navbar.Brand href="home">
        <FontAwesomeIcon icon={faRobot} className="icon" />{" "}
        <span className="bold-text">Hack</span>ease
      </Navbar.Brand>

      <Nav variant="pills" className="mr-auto"></Nav>
      <Nav>
        {user ? (
          <>
            <Nav.Link>Hello, {user.username}</Nav.Link>
            <Nav.Link href="logout">Logout</Nav.Link>
          </>
        ) : (
          <Nav.Link href="signup">Sign up</Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
