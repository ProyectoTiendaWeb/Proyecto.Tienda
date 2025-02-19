// filepath: /f:/Documentos/01-Desarrollo/19-React/proyecto-tienda/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ carrito }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Tienda</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li>🛒 Carrito ({carrito.length})</li>
      </ul>
    </nav>
  );
}

export default Navbar;