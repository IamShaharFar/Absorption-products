// Home.js
import React from 'react';
import Products from './home/Products';
function Home({products}) {
  return (
    <div>
      <Products products={products}/>
    </div>
  );
}

export default Home;
