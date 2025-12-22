
// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Features from "./Pages/Features";
import Products from "./Pages/Products";
import SmartCollar from "./Pages/SmartCollar";
import SmartEarTag from "./Pages/SmartEarTag";
import NotFound from "./Components/NotFound";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="feature" element={<Features />} />
          <Route path="products" element={<Products />} />
          <Route path="products/smart-collar" element={<SmartCollar />} />
          <Route path="products/smart-ear-tag" element={<SmartEarTag />} />
          {/* Catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
