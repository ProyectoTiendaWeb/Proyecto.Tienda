import React, { useState } from 'react';
import '../styles/Carrito.css';

const Carrito = ({ items = [] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isEmpty = items.length === 0;

  const toggleVisibility = (event) => {
    // Evita que el clic en el contenido cierre el carrito
    if (event.target.classList.contains('carrito-icon')) {
      setIsVisible(!isVisible);
    }
  };

  return (
    <div className={`carrito-container ${isVisible ? 'visible' : 'hidden'}`}> 
      <div className="carrito-icon" onClick={toggleVisibility}></div>
      {isVisible && (
        <div className="carrito-content">
          <h2>Carrito de Compras</h2>
          {isEmpty ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item.nombre} - ${item.precio}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Carrito;