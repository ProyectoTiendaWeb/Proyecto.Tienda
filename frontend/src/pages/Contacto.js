import React from 'react';
import '../styles/Contacto.css';

const Contacto = () => {
  return (
    <div className="contact-container">
      <h1>Contacto</h1>
      <form className="contact-form">
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Mensaje:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;