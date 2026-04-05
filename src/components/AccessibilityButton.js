import React, { useState, useContext } from "react";
import { Accessibility } from "accessibility/dist/main";
import { AccessibilityContext } from "./Accesability/AccessibilityProvider";
import "./styles/Accesability.css";
import { useLanguage } from "../i18n";

function AccessibilityButton() {
  const accessibilityInstance = useContext(AccessibilityContext);
  const { t } = useLanguage();

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
          <button className="btn btn-primary" onClick={increaseText}>{t("accessibility.increase_text")}</button>
          <button className="btn btn-primary" onClick={decreaseText}>{t("accessibility.decrease_text")}</button>
          <button className="btn btn-primary" onClick={invertColors}>{t("accessibility.invert_colors")}</button>
          <button className="btn btn-primary" onClick={increaseTextSpacing}>{t("accessibility.increase_spacing")}</button>
          <button className="btn btn-primary" onClick={decreaseTextSpacing}>{t("accessibility.decrease_spacing")}</button>
          <button className="btn btn-primary" onClick={grayHues}>{t("accessibility.gray_hues")}</button>
          <button className="btn btn-primary" onClick={underlineLinks}>{t("accessibility.underline_links")}</button>
          <button className="btn btn-primary" onClick={textToSpeech}>{t("accessibility.text_to_speech")}</button>
          <button className="btn btn-primary" onClick={speechToText}>{t("accessibility.speech_to_text")}</button>
        </div>
      )}
    </div>
  );
}

export default AccessibilityButton;
