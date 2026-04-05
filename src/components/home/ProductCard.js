import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";
import { useLanguage } from "../../i18n";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductCard = ({ product, isRelatedProduct }) => {
  const { t } = useLanguage();
  const dispatch = useDispatch();

  const whatsappText = `היי עיינתי באתר רום שיווק וברצוני לבצע רכישה של ${product.name} תודה!`;
  const productUrl = `https://rom-shivuk.co.il/#/products/${product.id}`;

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart({ id: product.id, name: product.name, price: product.price, imgUrl: product.imgUrl }));
  };

  return (
    <div className={`product-card${isRelatedProduct ? " related-product" : ""}`}>
      <Link to={`/products/${product.id}`} className="card-link">
        <div className="product-content">
          <div className="product-image-wrap">
            <img src={product.imgUrl} alt={product.name} className="product-image" />
          </div>
          <h3 className="product-title">{product.name}</h3>
        </div>
      </Link>
      <div className="product-bottom">
        <p className="product-price">{t("product.price_label")} {product.price}₪</p>
        <button className="product-button product-button--cart" onClick={handleAddToCart}>
          <i className="fa-solid fa-cart-plus wa-icon"></i>
          <span>{t("cart.add_to_cart")}</span>
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://api.whatsapp.com/send?phone=+972546551108&text=${encodeURIComponent(whatsappText)}%20${encodeURIComponent(productUrl)}`}
          className="product-button"
        >
          <i className="fa-brands fa-whatsapp wa-icon"></i>
          <span>{t("product.buy_via_agent")}</span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
