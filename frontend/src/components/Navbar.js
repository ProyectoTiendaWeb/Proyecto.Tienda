import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);

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

  return (
    <nav className="navbar">
      <div className="navbar-brand">Mi Tienda</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        {user ? (
          <div className="navbar-user-section">
            <span className="navbar-user">Hola, {user}</span>
            <button onClick={handleLogout} className="logout-btn">Cerrar sesión</button>
          </div>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
