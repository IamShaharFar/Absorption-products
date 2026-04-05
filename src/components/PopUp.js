import React from "react";
import "./styles/Popup.css";
import { useLanguage } from "../i18n";

const PopUp = () => {
  const { t } = useLanguage();
  return (
    <div className="pop-up-component">
      <h2 className="pop-up-phone">
        {t("popup.customer_service")}
        <i className="fa-solid fa-phone phone-icon"></i>
      </h2>
      <h2 className="pop-up-title">
        {t("popup.free_shipping")}
        <i className="fa-solid fa-info information-icon"></i>
      </h2>
    </div>
  );
};

export default PopUp;
