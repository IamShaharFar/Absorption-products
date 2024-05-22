import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logoImg from "./assets/rom-shivuk.jpg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Banner.css";
import "./styles/Navbar.css";

function NavBar({ onSearch, products }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
    setSearchResults(
      products.filter((item) => {
        return item.name.includes(inputValue);
      })
    );
    setSearchInput(inputValue);
    console.log(inputValue);
    console.log(products);
    console.log(
      products.filter((item) => {
        return item.name.includes(inputValue);
      })
    );
  };
  

  return (
    <div
      className={`navbar-container scrolled ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="banner-container">
        <Link to={`/`}>
          <img
            className={`banner-logo ${isScrolled ? "small-logo" : ""}`}
            src={logoImg}
            alt="Logo"
          />
        </Link>
      </div>
      {isMobile && (
        <Link to={`/`}>
          <img
            className={`mobile-home-button ${isScrolled ? "scrolled" : ""}`}
            src={logoImg}
          />
        </Link>
      )}
      <div className="navbar-search">
        <input
          className="custom-input"
          type="text"
          placeholder="אני מחפש לקנות"
          onChange={handleInputChange}
          dir="rtl"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      {/* <div className="search-result-container">
        <div className="search-result">
          <ul>
            {searchResults.length > 0 && <span>lolol</span> &&
              searchResults.map((product) => (
                <div key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <li className="search-result-content" key={product.id}>
                      <img className="result-image" src={product.imgUrl} />
                      <span>{product.name}</span>
                    </li>
                  </Link>
                  <hr />
                </div>
              ))}
          </ul>
        </div>
      </div> */}
      <div className="navbars">
        <button className="navbar-button">
          מוצרי ספיגה
        </button>
        <button className="navbar-button">
          מוצרי ספיגה
        </button>
        <button className="navbar-button">
          מוצרי ספיגה
        </button>
        {/* <Navbar className="bg-body-tertiary navbar-brand-container">
          <Container className="navbar-brand-container">
            <Navbar.Brand href="#home" className="navbar-brand">
              צור קשר
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar className="bg-body-tertiary navbar-brand-container">
          <Container className="navbar-brand-container">
            <Navbar.Brand href="/" className="navbar-brand">
              חיתולים למבוגרים
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar className="bg-body-tertiary navbar-brand-container">
          <Container className="navbar-brand-container">
            <Navbar.Brand href="/" className="navbar-brand">
              מוצרי ספיגה
            </Navbar.Brand>
          </Container>
        </Navbar> */}
      </div>
    </div>
  );
}

export default NavBar;
