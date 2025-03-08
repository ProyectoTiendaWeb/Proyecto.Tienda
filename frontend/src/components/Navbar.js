import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Carrito from "./Carrito";

const Navbar = ({ carrito = [] }) => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("nombre");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nombre");
    setUser(null);
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Huarpe Indumentaria</div>
      <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</NavLink></li>
        <li><NavLink to="/contacto" onClick={() => setIsMenuOpen(false)}>Contáctenos</NavLink></li>
        {user ? (
          <div className="navbar-user-section">
            <span className="navbar-user">Hola, {user}</span>
            <button onClick={handleLogout} className="logout-btn">Cerrar sesión</button>
          </div>
        ) : (
          <>
            <li><NavLink to="/login" onClick={() => setIsMenuOpen(false)}>Login</NavLink></li>
            <li><NavLink to="/register" onClick={() => setIsMenuOpen(false)}>Registrar</NavLink></li>
          </>
        )}
        <li className="cart-container">
          <Carrito items={carrito} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
