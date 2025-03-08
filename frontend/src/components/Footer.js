import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Huarpe Indumentaria</h3>
          <p>Tu tienda de ropa favorita con las mejores marcas y precios.</p>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
          <p>Teléfono: +123 456 789</p>
          <p>Email: info@huarpeindumentaria.com</p>
        </div>
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/contacto">Contáctenos</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Registrar</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Huarpe Indumentaria. Todos los derechos reservados.</p>
      </div>
      <a href="https://wa.me/123456789" className="whatsapp-floating" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={40} />
      </a>
    </footer>
  );
};

export default Footer;