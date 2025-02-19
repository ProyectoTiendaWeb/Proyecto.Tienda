import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import camiseta from './assets/camiseta.png';
import pantalones from './assets/pantalones.png';
import botines from './assets/botines.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contacto from './Contacto';
import Login from './Login';

function App() {
  const [carrito, setCarrito] = useState([]); // Estado del carrito
  const [auth, setAuth] = useState(false); // Estado de autenticación

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]); // Agrega el producto al array
  };

  return (
    <Router>
      <div className="App">
        <Navbar carrito={carrito} /> {/* Pasa el carrito al Navbar */}
        <Routes>
          <Route path="/" element={<Home 
            camiseta={camiseta} 
            pantalones={pantalones} 
            botines={botines} 
            agregarAlCarrito={agregarAlCarrito} 
            carrito={carrito} 
          />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;