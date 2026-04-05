// Home.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Products from './home/Products';
import { usePageTitle } from '../hooks/usePageTitle';

function Home({ products }) {
  usePageTitle();
  const { categoryKey } = useParams();
  const filtered = categoryKey
    ? products.filter((p) => p.categoryKeys.includes(categoryKey))
    : products;

  return (
    <div>
      <Products products={filtered} />
    </div>
  );
}

export default Home;
