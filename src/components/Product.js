import React, { useEffect } from "react";
import RelatedProducts from "./home/RelatedProducts";
import { useParams } from "react-router-dom";
import { useLanguage } from "../i18n";
import { usePageTitle } from "../hooks/usePageTitle";
import "./styles/ProductView.css";

function Product({ localizedProducts }) {
  const { id } = useParams();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = localizedProducts?.find((item) => item.id === parseInt(id));

  usePageTitle(product?.name);

  if (!product) {
    return <h2>{t("product.not_found")}</h2>;
  }

  const whatsappText = `היי עיינתי באתר רום שיווק וברצוני לבצע רכישה של ${product.name} תודה!`;

  return (
    <div className="product-view-component">
      <div className="product-details">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="product-view-image"
        />
        <div className="product-view-text">
          <h2 className="product-view-name">{product.name}</h2>
          <p className="product-view-price">{t("product.price_label")} {product.price}₪</p>
          <hr />
          <p className="product-view-description">{product.description}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://api.whatsapp.com/send?phone=+972546551108&text=${encodeURIComponent(whatsappText)}%20https://rom-shivuk.co.il/%23/products/${product.id}`}
            className="product-view-button"
          >
            <i className="fa-brands fa-whatsapp wa-icon"></i>
            {t("product.buy_via_agent")}
          </a>
        </div>
      </div>
      <RelatedProducts localizedProducts={localizedProducts} />
    </div>
  );
}

export default Product;
