import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";
import { useLanguage } from "../../i18n";

const ProductCard = ({ product, isRelatedProduct }) => {
  const { t } = useLanguage();

  const whatsappText = t("product.whatsapp_template").replace("{productName}", product.name);
  const productUrl = `https://rom-shivuk.co.il/#/products/${product.id}`;

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
