import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PopUp from "./components/PopUp";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Product from "./components/Product";
import CartSidebar from "./components/CartSidebar";
import "./App.css";
import Footer from "./components/Footer";
import { Accessibility } from "accessibility-react/dist/index";
import { useSelector } from "react-redux";
import { selectProducts } from "./redux/productsSlice";
import { useLanguage } from "./i18n";

function App() {
  const rawProducts = useSelector(selectProducts);
  const { t, getProductTranslation } = useLanguage();

  const [searchQuery, setSearchQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  // Merge raw product data with active-language translations
  const localizedProducts = rawProducts.map((p) => {
    const tr = getProductTranslation(p.id);
    return {
      ...p,
      name: tr.name || "",
      description: tr.description || "",
      categories: p.categoryKeys.map((key) => t(`categories.${key}`)),
    };
  });

  const filteredProducts = localizedProducts
    .filter((p) => !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="root">
      <PopUp />
      <NavBar onSearch={setSearchQuery} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home products={filteredProducts} />} />
        <Route path="/category/:categoryKey" element={<Home products={filteredProducts} />} />
        <Route path="/products/:id" element={<Product localizedProducts={localizedProducts} />} />
      </Routes>
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
      <Footer />
      <Accessibility Options={{
        labels: {
          resetTitle:           t("accessibility.resetTitle"),
          closeTitle:           t("accessibility.closeTitle"),
          menuTitle:            t("accessibility.menuTitle"),
          increaseText:         t("accessibility.increaseText"),
          decreaseText:         t("accessibility.decreaseText"),
          increaseLineHeight:   t("accessibility.increaseLineHeight"),
          decreaseLineHeight:   t("accessibility.decreaseLineHeight"),
          increaseTextSpacing:  t("accessibility.increaseTextSpacing"),
          decreaseTextSpacing:  t("accessibility.decreaseTextSpacing"),
          invertColors:         t("accessibility.invertColors"),
          grayHues:             t("accessibility.grayHues"),
          underlineLinks:       t("accessibility.underlineLinks"),
          bigCursor:            t("accessibility.bigCursor"),
          readingGuide:         t("accessibility.readingGuide"),
          disableAnimations:    t("accessibility.disableAnimations"),
          readableFont:         t("accessibility.readableFont"),
        },
        modules: {
          increaseText: true,
          decreaseText: true,
          increaseLineHeight: true,
          decreaseLineHeight: true,
          increaseTextSpacing: true,
          decreaseTextSpacing: true,
          invertColors: true,
          grayHues: true,
          underlineLinks: true,
          bigCursor: true,
          readingGuide: true,
          disableAnimations: true,
          readableFont: true,
        },
        style: {
          mode: "light",
          icon: "access",
          shape: "circle",
          position: {
            bottom: { size: 50 },
            left: { size: 20 },
            toRight: true,
          },
        },
      }} />
    </div>
  );
}

export default App;
