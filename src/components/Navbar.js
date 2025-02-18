import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/carrito">Carrito</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
