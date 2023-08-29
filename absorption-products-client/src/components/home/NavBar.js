import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logoImg from "./assets/rom-shivuk.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar({ onSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onSearch(inputValue);
  };

  return (
    <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="banner-container">
        <img
          className={`banner-logo ${isScrolled ? "small-logo" : ""}`}
          src={logoImg}
          alt="Logo"
        />
      </div>
      <div className="navbar-search">
        <input
          class="custom-input"
          type="text"
          placeholder="אני מחפש לקנות"
          onChange={handleInputChange}
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="navbars">
        <Navbar className="bg-body-tertiary nav">
          <Container>
            <Navbar.Brand href="#home" className="navbar-brand">
              צור קשר
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/" className="navbar-brand">
              חיתולים למבוגרים
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar className="bg-body-tertiary navbar-sticky">
          <Container>
            <Navbar.Brand href="/" className="navbar-brand">
              מוצרי ספיגה
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
