import React, { useState } from 'react';
import '../styles/Carrito.css';

const Carrito = ({ items = [], eliminarDelCarrito, descontarDelCarrito }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isEmpty = items.length === 0;

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const itemCount = items.reduce((total, item) => total + item.cantidad, 0);
  const totalPrice = items.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);

  return (
    <div className={`carrito-container ${isVisible ? 'visible' : 'hidden'}`} onClick={toggleVisibility}>
      {isVisible ? (
        <>
          <h2>Carrito de Compras</h2>
          {isEmpty ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <span>{item.nombre} - ${item.precio} x {item.cantidad}</span>
                    <button className="decrement-button" onClick={(e) => {
                      e.stopPropagation();
                      descontarDelCarrito(item);
                    }}>
                      −
                    </button>
                  </li>
                ))}
              </ul>
              <div className="total">
                <strong>Total: ${totalPrice}</strong>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="carrito-icon">
          <i className="fas fa-shopping-cart"></i>
          {itemCount > 0 && <span className="item-count">{itemCount}</span>}
        </div>
      )}
    </div>
  );
};

export default Carrito;