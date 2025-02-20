import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/App.css';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [auth, setAuth] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar carrito={carrito} />
        <Routes>
          <Route path="/" element={<Home agregarAlCarrito={agregarAlCarrito} carrito={carrito} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;