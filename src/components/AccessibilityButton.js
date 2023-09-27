import React, { useEffect, useState, useContext } from "react";
import { Accessibility } from "accessibility/dist/main";
import { AccessibilityContext } from "./Accesability/AccessibilityProvider";
import "./styles/Accesability.css";

function AccessibilityButton() {
  const accessibilityInstance = useContext(AccessibilityContext);

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const increaseText = () => {
    accessibilityInstance.menuInterface.increaseText();
  };

  const decreaseText = () => {
    accessibilityInstance.menuInterface.decreaseText();
  };

  const increaseTextSpacing = () => {
    accessibilityInstance.menuInterface.increaseTextSpacing();
  };

  const decreaseTextSpacing = () => {
    accessibilityInstance.menuInterface.decreaseTextSpacing();
  };

  const invertColors = () => {
    accessibilityInstance.menuInterface.invertColors();
  }

  const grayHues = () => {
    accessibilityInstance.menuInterface.grayHues();
  };

  const underlineLinks = () => {
    accessibilityInstance.menuInterface.underlineLinks();
  };

  const textToSpeech = () => {
    accessibilityInstance.menuInterface.textToSpeech();
  };

  const speechToText = () => {
    accessibilityInstance.menuInterface.speechToText();
  };
  
  return (
    <div className="accessibility-menu">
      <button className="accessibility-button" onClick={toggleMenu}>
        <i className="fas fa-universal-access"></i>
      </button>
      {menuVisible && (
        <div className="accessibility-options">
          <button className="btn btn-primary" onClick={increaseText}>
            הגדל גודל טקסט
          </button>
          <button className="btn btn-primary" onClick={decreaseText}>
            הפחת גודל טקסט
          </button>
          {/* <button className="btn btn-primary" onClick={decreaseText}>
            הגדל גודל שורה
          </button>
          <button className="btn btn-primary" onClick={decreaseText}>
            הפחת גודל שורה
          </button> */}
          <button className="btn btn-primary" onClick={invertColors}>הפוך צבעים</button>
          <button className="btn btn-primary" onClick={increaseTextSpacing}>
          הגדל מרווח טקסט
          </button>
          <button className="btn btn-primary" onClick={decreaseTextSpacing}>
          הפחת מרווח טקסט
          </button>
          <button className="btn btn-primary" onClick={grayHues}>גווני אפור</button>
          <button className="btn btn-primary" onClick={underlineLinks}>קו תחתון לקישורים</button>
          <button className="btn btn-primary" onClick={textToSpeech}>טקסט לדיבור</button>
          <button className="btn btn-primary" onClick={speechToText}>דיבור לטקסט</button>
        </div>
      )}
    </div>
  );
}

export default AccessibilityButton;
