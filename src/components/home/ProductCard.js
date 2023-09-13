import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product, isRelatedProduct }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const whatsappText = `היי עיינתי באתר רום שיווק וברצוני לבצע רכישה של ${product.name} תודה!`

  return (
    <div className={`product-card ${isRelatedProduct ? "related-product" : ""}`} title={product.description}>
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
          <p className="product-price">מחיר: {product.price}₪</p>
        </div>
      </Link>
      <div className="product-bottom">
        <a
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=+972526570554&text=${whatsappText} \n\n\n
          https://rom-shivuk.co.il/#/products/${product.id}`}
          className="product-button"
        >
          <i className="fa-brands fa-whatsapp wa-icon"></i>
          קנה דרך נציג
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
