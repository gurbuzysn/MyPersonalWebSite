import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import {Container} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Navbar className="navbar" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
        
    </div>
  )
};
export default Header;
