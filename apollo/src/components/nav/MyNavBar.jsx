import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav.css";
import jslogo from "../../assets/javascript-svgrepo-com.svg";

function MyNavbar() {
  return (
    <div>
      <Navbar className="nav" expand="lg">
        <Container >
          <Navbar.Brand className="navlink">
            <a href="#home">
              <img src={jslogo} alt="image" className="navimage" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navcollapse"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
           
            <Nav className="ms-auto">
              <Nav.Link className="navlink" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="navlink" href="#about">
                About us
              </Nav.Link>
              <Nav.Link className="navlink" href="#features">
                Features
              </Nav.Link>
              <Nav.Link className="navlink" href="#signup">
                Sign up
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;