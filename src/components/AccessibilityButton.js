import React, { useEffect, useState } from "react";
import { Accessibility } from "accessibility/dist/main";
import "./styles/Accesability.css";

function AccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false);

  const labels = {
    resetTitle: "איפוס להגדרות ברירת מחדל",
    closeTitle: "סגור",
    menuTitle: "תפריט",
    increaseText: "הגדל גודל טקסט",
    decreaseText: "הפחת גודל טקסט",
    increaseTextSpacing: "הגדל מרווח טקסט",
    decreaseTextSpacing: "הפחת מרווח טקסט",
    increaseLineHeight: "הגדל גובה שורה",
    decreaseLineHeight: "הפחת גובה שורה",
    invertColors: "הפוך צבעים",
    grayHues: "גווני אפור",
    underlineLinks: "קו תחתון לקישורים",
    bigCursor: "סמן גדול",
    readingGuide: "מדריך קריאה",
    textToSpeech: "טקסט לדיבור",
    speechToText: "דיבור לטקסט",
    disableAnimations: "ביטול הנפשות",
  };

  const options = {
    labels: labels,
    icon: {
      position: {
        bottom: { size: -200, units: "px" },
        right: { size: 0, units: "px" },
        type: "fixed",
      },
    },
  };

   const instance = new Accessibility(options);

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const increaseText = () => {
    instance.menuInterface.increaseText();
  };

  const decreaseText = () => {
    instance.menuInterface.decreaseText();
  };

  const increaseTextSpacing = () => {
    instance.menuInterface.increaseTextSpacing();
  };

  const decreaseTextSpacing = () => {
    instance.menuInterface.decreaseTextSpacing();
  };

  const invertColors = () => {
    instance.menuInterface.invertColors();
  }

  const grayHues = () => {
    instance.menuInterface.grayHues();
  };

  const underlineLinks = () => {
    instance.menuInterface.underlineLinks();
  };

  const textToSpeech = () => {
    instance.menuInterface.textToSpeech();
  };

  const speechToText = () => {
    instance.menuInterface.speechToText();
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
