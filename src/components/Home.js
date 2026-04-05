// Home.js
import React from 'react';
import Products from './home/Products';
import { usePageTitle } from '../hooks/usePageTitle';
function Home({products}) {
  usePageTitle();
  return (
    <div>
      <Products products={products}/>
    </div>
  );
}

export default Home;
