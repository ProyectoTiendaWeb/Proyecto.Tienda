import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Asegúrate de que esta ruta es correcta

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Mi Tienda</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
