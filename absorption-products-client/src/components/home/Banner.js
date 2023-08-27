import React from "react";
import logoImg from "./assets/rom-shivuk.jpg";

const Banner = () => {
  return (
    <div className="banner-container">
      <img className="banner-logo" src={logoImg} alt="Logo" />
    </div>
  );
};

export default Banner;
