// frontend/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Cargar productos desde el backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener productos", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item._id !== productId));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
}

export default App;
