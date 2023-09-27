// accessibilityInstance.js
import { Accessibility } from "accessibility/dist/main";

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

const accessibilityInstance = new Accessibility(options);

export default accessibilityInstance;
