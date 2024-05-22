import React from "react";
import "./styles/Popup.css";

const PopUp = () => {
  return (
    <div className="pop-up-component">
      <h2 className="pop-up-phone">
        שירות לקוחות 054-655-1108
        <i className="fa-solid fa-phone phone-icon"></i>
      </h2>
      <h2 className="pop-up-title">
      משלוח חינם בכל קנייה מעל  290 ש”ח עד בית הלקוח 
        <i className="fa-solid fa-info information-icon"></i>
      </h2>
    </div>
  );
};

export default PopUp;
