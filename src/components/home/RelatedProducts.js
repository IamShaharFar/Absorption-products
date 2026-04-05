import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "../styles/RelatedProducts.css";
import { useLanguage } from "../../i18n";

function RelatedProducts({ localizedProducts }) {
  const { t } = useLanguage();

  const randomProducts = useMemo(() => {
    if (!localizedProducts || localizedProducts.length === 0) return [];
    const shuffled = [...localizedProducts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [localizedProducts]);

  return (
    <div className="related-products">
      <div className="related-products-header">
        <h3 className="related-products-title">{t("product.related_title")}</h3>
      </div>
      <div className="related-products-list">
        {randomProducts.map((product) => {
          const whatsappText = t("product.whatsapp_template").replace("{productName}", product.name);
          return (
            <div className="related-product-card" key={product.id}>
              <Link to={`/products/${product.id}`} className="card-link">
                <div className="related-product-content">
                  <div className="related-product-image-wrap">
                    <img
                      src={product.imgUrl}
                      alt={product.name}
                      className="related-product-image"
                    />
                  </div>
                  <h3 className="related-product-title">{product.name}</h3>
                </div>
              </Link>
              <div className="related-product-bottom">
                <p className="related-product-price">{t("product.price_label")} {product.price}₪</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://api.whatsapp.com/send?phone=+972546551108&text=${encodeURIComponent(whatsappText)}%20https://rom-shivuk.co.il/%23/products/${product.id}`}
                  className="related-product-button"
                >
                  <i className="fa-brands fa-whatsapp wa-icon"></i>
                  {t("product.buy_via_agent")}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;
