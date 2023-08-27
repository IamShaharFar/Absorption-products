import React from 'react';
import ProductCard from './ProductCard';

function RelatedProducts({ products }) {
  // Get 3 random product indices
  const randomIndices = [];
  while (randomIndices.length < 3) {
    const randomIndex = Math.floor(Math.random() * products.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  // Get the random products
  const randomProducts = randomIndices.map(index => products[index]);

  return (
    <div className="related-products">
      <div className="related-products-header">
        <h3 className="related-products-title">אנשים שהתעניינו במוצר קנו גם</h3>
      </div>
      <div className="related-products-list">
        {randomProducts.map(product => (
          <ProductCard key={product.id} product={product} isRelatedProduct />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
