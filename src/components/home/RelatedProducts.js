import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "../styles/RelatedProducts.css";

function RelatedProducts({ products }) {
  const [isMobile, setIsMobile] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const randomIndices = [];
  while (randomIndices.length < 3) {
    const randomIndex = Math.floor(Math.random() * products.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  const randomProducts = randomIndices.map((index) => products[index]);

  return (
    <div className="related-products">
      <div className="related-products-header">
        <h3 className="related-products-title">אנשים שהתעניינו במוצר קנו גם</h3>
      </div>
      <div className="related-products-list">
        {randomProducts.map((product) => (
          <>
            <div
              className="related-product-card"
              key={product.id}
              title={product.description}
            >
              <Link to={`/products/${product.id}`} className="card-link">
                <div className="related-product-content">
                  <img
                    src={product.imgUrl}
                    alt={product.name}
                    className="related-product-image"
                  />
                  <h3 className="related-product-title">{product.name}</h3>
                  <p
                    className="related-product-description"
                    style={{ cursor: "pointer" }}
                  ></p>
                  <p className="related-product-price">מחיר: {product.price}₪</p>
                </div>
              </Link>
              <div className="related-product-bottom">
                <a
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+972526570554&text=היי עיינתי באתר רום שיווק וברצוני לבצע רכישה של ${product.name} תודה! \n\n\n
                         https://rom-shivuk.co.il/#/products/${product.id}`}
                  className="related-product-button"
                >
                  <i className="fa-brands fa-whatsapp wa-icon"></i>
                  קנה דרך נציג
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
