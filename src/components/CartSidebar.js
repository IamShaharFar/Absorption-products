import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../redux/cartSlice";
import { useLanguage } from "../i18n";
import "./styles/CartSidebar.css";

const WHATSAPP_PHONE = "+972546551108";

function CartSidebar({ open, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const { t, lang } = useLanguage();

  const isRtl = lang === "he" || lang === "ar";

  const buildWhatsAppMessage = () => {
    const header = t("cart.whatsapp_order_header");
    const itemLines = items.map((item) =>
      t("cart.whatsapp_order_item")
        .replace("{quantity}", item.quantity)
        .replace("{name}", item.name)
        .replace("{price}", (parseFloat(item.price) * item.quantity).toFixed(2))
    );
    const totalLine = t("cart.whatsapp_order_total").replace(
      "{total}",
      total.toFixed(2)
    );
    return [header, ...itemLines.map((l) => `- ${l}`), totalLine].join("\n");
  };

  const handleWhatsAppOrder = () => {
    const message = buildWhatsAppMessage();
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleQuantityChange = (id, newQty) => {
    if (newQty < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQty }));
    }
  };

  return (
    <>
      {open && (
        <div className="cart-backdrop" onClick={onClose} aria-hidden="true" />
      )}
      <div
        className={`cart-sidebar${open ? " cart-sidebar--open" : ""}${isRtl ? " cart-sidebar--rtl" : " cart-sidebar--ltr"}`}
        aria-label={t("cart.title")}
        role="dialog"
        aria-modal="true"
      >
        <div className="cart-header">
          <h2 className="cart-title">{t("cart.title")}</h2>
          <button className="cart-close" onClick={onClose} aria-label="close">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <p className="cart-empty">{t("cart.empty")}</p>
          ) : (
            <ul className="cart-items-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-details">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">
                      {(parseFloat(item.price) * item.quantity).toFixed(2)}₪
                    </span>
                    <div className="cart-item-controls">
                      <button
                        className="cart-qty-btn"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        aria-label="decrease quantity"
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span className="cart-qty-value">{item.quantity}</span>
                      <button
                        className="cart-qty-btn"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        aria-label="increase quantity"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="cart-remove-btn"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        aria-label="remove item"
                      >
                        <i className="fa-solid fa-trash"></i>
                        <span>{t("cart.remove")}</span>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>{t("cart.total")}</span>
              <span>{total.toFixed(2)}₪</span>
            </div>
            <button className="cart-whatsapp-btn" onClick={handleWhatsAppOrder}>
              <i className="fa-brands fa-whatsapp"></i>
              <span>{t("cart.order_via_whatsapp")}</span>
            </button>
            <button
              className="cart-clear-btn"
              onClick={() => dispatch(clearCart())}
            >
              {t("cart.remove")}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartSidebar;
