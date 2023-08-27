import React from 'react';
import { useParams } from 'react-router-dom';
import RelatedProducts from './home/RelatedProducts';

function Product({ products }) {
  const { id } = useParams();

  // Find the product with the matching ID from the products array
  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.imgUrl} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">מחיר: {product.price}₪</p>
      <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=+972526570554&text=היי, !אני מעוניין לבצע רכישה של מוצרי ספיגה, אשמח שנציג יחזור אלי. תודה"
          className="product-button"
        >
          קנה עכשיו
        </a>
      <RelatedProducts products={products} />
    </div>
  );
}

export default Product;
