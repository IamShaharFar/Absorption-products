import React, { useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  const categories = ["תחתונים סופגים", "מוצרי ספיגה", "חיתולים למבוגרים"];

  const [filterOptions, setFilterOptions] = useState({
    price: "", // "high" or "low"
    category: "",
    name: "",
  });

  const filteredProducts = products.filter((product) => {
    const matchesPrice =
      (!filterOptions.price ||
        (filterOptions.price === "high" && product.price >= 50) ||
        (filterOptions.price === "low" && product.price < 50));

    const matchesCategory =
      (!filterOptions.category || product.categories.includes(filterOptions.category));

    const matchesName =
      (!filterOptions.name ||
        product.name.toLowerCase().includes(filterOptions.name.toLowerCase()));

    return matchesPrice && matchesCategory && matchesName;
  });

  return (
    <div className="products-component">
      <h2 className="hot-deals-heading">המוצרים שלנו</h2>
      
      {/* Centered filter options */}
      <div className="filter-container">
        <div className="filter-options">
          <select
            className="filter-select"
            value={filterOptions.price}
            onChange={(e) =>
              setFilterOptions({
                ...filterOptions,
                price: e.target.value,
              })
            }
          >
            <option value="">מחיר</option>
            <option value="high">גבוה לנמוך</option>
            <option value="low">נמוך לגבוה</option>
          </select>
          <select
            className="filter-select"
            value={filterOptions.category}
            onChange={(e) =>
              setFilterOptions({
                ...filterOptions,
                category: e.target.value,
              })
            }
          >
            <option value="">קטגוריה</option>
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
          <input
            className="filter-input"
            type="text"
            placeholder="חיפוש לפי שם"
            value={filterOptions.name}
            onChange={(e) =>
              setFilterOptions({
                ...filterOptions,
                name: e.target.value,
              })
            }
          />
        </div>
      </div>
      
      <div className="product-list">
        {filteredProducts.map((item, index) => (
          <ProductCard product={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
