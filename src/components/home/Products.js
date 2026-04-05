import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/Products.css";
import { useLanguage } from "../../i18n";

const Products = ({ products }) => {
  const { t } = useLanguage();
  const [priceSort, setPriceSort] = useState("");

  const sortedProducts = [...products].sort((a, b) => {
    if (priceSort === "low") return a.price - b.price;
    if (priceSort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="products-component">
      <h2 className="hot-deals-heading">{t("products_page.our_products")}</h2>
      <div className="products-and-filter">
        <div className="filter-container">
          <select
            className="filter-select"
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
            aria-label={t("products_page.sort_by_price")}
          >
            <option value="">{t("products_page.sort_by_price")}</option>
            <option value="high">{t("products_page.high_to_low")}</option>
            <option value="low">{t("products_page.low_to_high")}</option>
          </select>
        </div>

        <div className="products-list">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((item) => (
              <ProductCard product={item} key={item.id} />
            ))
          ) : (
            <p className="no-results-message">{t("products_page.no_results")}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
