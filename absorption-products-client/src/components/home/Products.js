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
      !filterOptions.price ||
      (filterOptions.price === "high" && product.price >= 50) ||
      (filterOptions.price === "low" && product.price < 50);

    const matchesCategory =
      !filterOptions.category ||
      product.categories.includes(filterOptions.category);

    const matchesName =
      !filterOptions.name ||
      product.name.toLowerCase().includes(filterOptions.name.toLowerCase());

    return matchesPrice && matchesCategory && matchesName;
  });

  return (
    <div className="products-component">
      <div className="inputBox_container">
        <svg
          className="search_icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          alt="search icon"
        >
          <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
        </svg>
        <input
          className="inputBox"
          id="inputBox"
          type="text"
          value={filterOptions.name}
          onChange={(e) =>
            setFilterOptions({
              ...filterOptions,
              name: e.target.value,
            })
          }
          placeholder="חיפוש לפי שם"
        />
      </div>
      <h2 className="hot-deals-heading">המוצרים שלנו</h2>
      <div className="products-and-filter">
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
          </div>
        </div>

        <div className="product-list">
          {filteredProducts.map((item, index) => (
            <ProductCard product={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
