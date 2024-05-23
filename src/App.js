import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopUp from "./components/PopUp";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Product from "./components/Product";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import { Accessibility } from "accessibility-react/dist/index";
import { useSelector } from "react-redux";
import { selectProducts } from "./redux/productsSlice";

function App() {
  const products = useSelector(selectProducts);

  const [filteredProductes, setFilteredProductes] = useState(products);

  const searchHandler = (input) => {
    const filteredProducts = products.filter((product) =>
      product.name.includes(input)
    );
    setFilteredProductes(filteredProducts);
  };

  return (
    <div className="root">
      <PopUp />
      <NavBar onSearch={searchHandler} />
      <Routes>
        <Route path="/" element={<Home products={filteredProductes} />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
      <Accessibility/>
    </div>
  );
}

export default App;
