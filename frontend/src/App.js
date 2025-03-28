import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import Footer from './components/Footer';
import Homepage from '../src/pages/Homepage';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/App.css';

function App() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    window.appSetCarrito = setCarrito;
    return () => {
      delete window.appSetCarrito;
    };
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.nombre === producto.nombre);
      if (existe) {
        return prevCarrito.map((item) =>
          item.nombre === producto.nombre ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (producto) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.nombre !== producto.nombre));
  };

  const descontarDelCarrito = (producto) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map((item) =>
          item.nombre === producto.nombre
            ? item.cantidad > 1
              ? { ...item, cantidad: item.cantidad - 1 }
              : null
            : item
        )
        .filter(Boolean)
    );
  };

  return (
    <Router>
      <div className="App">
        <Navbar carrito={carrito} />
        <SubNavbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/hombre" element={<Home agregarAlCarrito={agregarAlCarrito} carrito={carrito} />} />
            <Route path="/mujer" element={<Home agregarAlCarrito={agregarAlCarrito} carrito={carrito} />} />
            <Route path="/checkout" element={<Checkout items={carrito} />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
//Probando API 12345 
// OAaaaaaaaa