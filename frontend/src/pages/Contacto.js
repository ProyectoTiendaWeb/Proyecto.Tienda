import React, { useState } from 'react';
import '../styles/Contacto.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se implementaría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contáctenos</h1>
        <p>Estamos aquí para ayudarte. ¡Contáctanos!</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Ubicación</h3>
              <p>Av. Ejemplo 123, Ciudad</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaPhone className="icon" />
            <div>
              <h3>Teléfono</h3>
              <p>+54 123 456 7890</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>contacto@ejemplo.com</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878894506!2d-58.38375908477038!3d-34.60373446500542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1sen!2sar!4v1635959481000!5m2!1sen!2sar"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación en el mapa"
        ></iframe>
      </div>
    </div>
  );
};


export default Contacto;