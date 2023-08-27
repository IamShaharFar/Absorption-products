import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <Navbar className="bg-body-tertiary navbar-sticky">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">מוצרי ספיגה</Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">חיתולים למבוגרים</Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">צור קשר</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
