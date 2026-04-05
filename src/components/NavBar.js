import React, { useEffect, useState, useRef } from "react";
import logoImg from "./assets/rom-shivuk.jpg";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Banner.css";
import "./styles/Navbar.css";
import { useLanguage, LANGUAGES, CATEGORY_KEYS } from "../i18n";

function NavBar({ onSearch, onCategoryFilter, activeCategory }) {
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  const handleCategoryClick = (key) => {
    const next = activeCategory === key ? "" : key;
    onCategoryFilter(next);
    navigate("/");
  };

  const handleLangSelect = (code) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <div className={`navbar-container${isScrolled ? " scrolled" : ""}`}>
      <div className="banner-container">
        <Link to="/">
          <img className="banner-logo" src={logoImg} alt={t("nav.logo_alt")} />
        </Link>
      </div>

      <div className="navbar-search-row">
        {/* Language dropdown */}
        <div className="lang-dropdown" ref={langRef}>
          <button
            className="lang-trigger"
            onClick={() => setLangOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={langOpen}
          >
            <span className="lang-flag">{currentLang?.flag}</span>
            <span className="lang-code">{currentLang?.label}</span>
            <i className={`fa-solid fa-chevron-${langOpen ? "up" : "down"} lang-chevron`}></i>
          </button>

          {langOpen && (
            <ul className="lang-menu" role="listbox">
              {LANGUAGES.map((l) => (
                <li
                  key={l.code}
                  className={`lang-option${lang === l.code ? " selected" : ""}`}
                  role="option"
                  aria-selected={lang === l.code}
                  onClick={() => handleLangSelect(l.code)}
                >
                  <span className="lang-flag">{l.flag}</span>
                  <span className="lang-option-name">{l.name}</span>
                  <span className="lang-option-code">{l.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="navbar-search">
          <input
            className="custom-input"
            type="text"
            placeholder={t("nav.search_placeholder")}
            value={searchInput}
            onChange={handleInputChange}
            aria-label={t("nav.search_aria")}
          />
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </div>
      </div>

      <nav className="navbars" aria-label={t("nav.categories_aria")}>
        <button
          className={`navbar-button${activeCategory === "" ? " active" : ""}`}
          onClick={() => { onCategoryFilter(""); navigate("/"); }}
          aria-pressed={activeCategory === ""}
        >
          {t("categories.all")}
        </button>
        {CATEGORY_KEYS.map((key) => (
          <button
            key={key}
            className={`navbar-button${activeCategory === key ? " active" : ""}`}
            onClick={() => handleCategoryClick(key)}
            aria-pressed={activeCategory === key}
          >
            {t(`categories.${key}`)}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default NavBar;
