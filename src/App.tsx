import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import ProductList from "./pages/ProductList";
import CartList from "./pages/CartList";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
