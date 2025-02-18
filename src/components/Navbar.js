import React from 'react';
import './Navbar.css';

function Navbar({ carrito }) {
  return (
    <nav className="navbar">
      <h1>Tienda</h1>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <li>🛒 Carrito ({carrito.length})</li> {/* Muestra cantidad de productos */}
      </ul>
    </nav>
  );
}

export default Navbar;
