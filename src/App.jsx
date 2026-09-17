import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import { shoes as initialShoes } from "./data/shoes";

import Header from "./parts/Header";
import Footer from "./parts/Footer";

export default function App() {
  const [shoes, setShoes] = useState(() => {
    try {
      const savedShoes = localStorage.getItem("sneakerhub-shoes");
      return savedShoes ? JSON.parse(savedShoes) : initialShoes;
    } catch {
      return initialShoes;
    }
  });

  const updateShoes = (nextShoes) => {
    setShoes(nextShoes);
    localStorage.setItem("sneakerhub-shoes", JSON.stringify(nextShoes));
  };

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home shoes={shoes} />} />
            <Route path="/catalog" element={<Catalog shoes={shoes} />} />
            <Route path="/catalog/:id" element={<Product shoes={shoes} />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/admin"
              element={<Admin shoes={shoes} onShoesChange={updateShoes} />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
