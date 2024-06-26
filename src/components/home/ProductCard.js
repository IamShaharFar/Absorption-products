import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product, isRelatedProduct }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const whatsappText = `היי עיינתי באתר רום שיווק וברצוני לבצע רכישה של ${product.name} תודה!`;
  const productUrl = `https://rom-shivuk.co.il/#/products/${product.id}`
  const encodedProductUrl = encodeURIComponent(productUrl);

  return (
    <div
      className={`product-card ${isRelatedProduct ? "related-product" : ""}`}
      title={product.description}
    >
      <Link to={`/products/${product.id}`} className="card-link">
        <div className="product-content">
          <img
            src={product.imgUrl}
            alt={product.name}
            className="product-image"
          />
          <h3 className="product-title">{product.name}</h3>
          <p
            className="product-description"
            onClick={toggleDescription}
            style={{ cursor: "pointer" }}
          >
            {showFullDescription
              ? product.description
              : product.description.length > 30
              ? "..." + product.description.slice(0, 30)
              : product.description}
          </p>
        </div>
      </Link>
      <div className="product-bottom">
        <p className="product-price">מחיר: {product.price}₪</p>
        <a
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=+972546551108&&text=${whatsappText}
          ${encodedProductUrl}`}
          className="product-button"
        >
          <i className="fa-brands fa-whatsapp wa-icon"></i>
          <span className="product-button-text">קנה דרך נציג</span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
