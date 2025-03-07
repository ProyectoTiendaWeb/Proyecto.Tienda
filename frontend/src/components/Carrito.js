import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Carrito.css';

const Carrito = ({ items = [], eliminarDelCarrito, descontarDelCarrito }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isEmpty = items.length === 0;
  const navigate = useNavigate();
  const carritoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (carritoRef.current && !carritoRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleDecrement = (e, item) => {
    e.stopPropagation();
    
    if (typeof descontarDelCarrito === 'function') {
      descontarDelCarrito(item);
    } else {
      if (window.appSetCarrito && typeof window.appSetCarrito === 'function') {
        window.appSetCarrito(prevCarrito => 
          prevCarrito
            .map(cartItem => 
              cartItem.nombre === item.nombre
                ? cartItem.cantidad > 1
                  ? { ...cartItem, cantidad: cartItem.cantidad - 1 }
                  : null
                : cartItem
            )
            .filter(Boolean)
        );
      }
    }
  };

  const handleCheckout = (e) => {
    e.stopPropagation();
    navigate('/checkout');
  };

  const itemCount = items.reduce((total, item) => total + item.cantidad, 0);
  const totalPrice = items.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);

  return (
    <div 
      ref={carritoRef}
      className={`carrito-container ${isVisible ? 'visible' : 'hidden'}`} 
      onClick={isVisible ? null : toggleVisibility}
    >
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
                    <button className="decrement-button" onClick={(e) => handleDecrement(e, item)}>
                      <i className="fas fa-minus"></i>
                    </button>
                    <span>{item.nombre} - ${item.precio} x {item.cantidad}</span>
                  </li>
                ))}
              </ul>
              <div className="total">
                <strong>Total: ${totalPrice}</strong>
              </div>
              <button 
                className="checkout-button"
                onClick={handleCheckout}
              >
                Proceder al pago
              </button>
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