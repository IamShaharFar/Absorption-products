import React, { useEffect } from "react";
import RelatedProducts from "./home/RelatedProducts";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/productsSlice";
import "./styles/ProductView.css";

function Product() {
  const products = useSelector(selectProducts);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = products.find((item) => item.id === parseInt(id));

  const whatsappText = `היי עיינתי באתר רום שיווק וברצוני לבצע רכישה של ${product.name} תודה!`;

  if (!product) {
    return <h2>Product not found</h2>;
  }

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
          <p className="product-view-price">מחיר: {product.price}₪</p>
          <hr />
          <p className="product-view-description">{product.description}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://api.whatsapp.com/send?phone=+972546551108&text=${whatsappText} \n\n\nhttps://rom-shivuk.co.il/#/products/${product.id}`}
            className="product-view-button"
          >
            <i className="fa-brands fa-whatsapp wa-icon"></i>
            קנה דרך נציג
          </a>
        </div>
      </div>
      <RelatedProducts products={products} />
    </div>
  );
}

export default Product;
