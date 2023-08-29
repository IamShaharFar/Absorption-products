import React from "react";
import RelatedProducts from "./home/RelatedProducts";
import { useParams } from "react-router-dom";

function Product({ products }) {
  const { id } = useParams();

  // Find the product with the matching ID from the products array
  const product = products.find((item) => item.id === parseInt(id));

  const whatsappText = `היי עיינתי באתר רום שיווק וברצוני לבצע רכישה של ${product.name} תודה!`

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-component">
      <div className="product-details">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="product-view-image"
        />
        <div className="product-view-text">
          <h2 className="product-view-name">{product.name}</h2>
          <p className="product-view-description">{product.description}</p>
          <p className="product-price">מחיר: {product.price}₪</p>
          <a
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=+972526570554&text=${whatsappText} \nhttps://www.limore.co.il/`}
            className="product-view-button"
          >
            קנה עכשיו
          </a>
        </div>
      </div>
      <RelatedProducts products={products} />
    </div>
  );
}

export default Product;
