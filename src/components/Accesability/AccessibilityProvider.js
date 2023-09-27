// AccessibilityProvider.js
import React, { createContext } from "react";
import accessibilityInstance from "./AccesabilityInstance";

export const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  return (
    <AccessibilityContext.Provider value={accessibilityInstance}>
      {children}
    </AccessibilityContext.Provider>
  );
};
