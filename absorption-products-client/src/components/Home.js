// Home.js
import React from 'react';
import Banner from './home/Banner';
import Products from './home/Products';
function Home({products}) {
  return (
    <div>
      <Banner />
      <Products products={products}/>
    </div>
  );
}

export default Home;
