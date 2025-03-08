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
    setIsVisible(false);
    navigate('/checkout');
  };

  const itemCount = items.reduce((total, item) => total + item.cantidad, 0);
  const totalPrice = items.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);

  return (
    <div 
      ref={carritoRef}
      className={`carrito-container ${isVisible ? 'visible' : ''}`} 
      onClick={isVisible ? null : toggleVisibility}
    >
      <div className="carrito-icon-wrapper">
        <div className="carrito-icon">
          <i className="fas fa-shopping-cart"></i>
          {itemCount > 0 && <span className="item-count">{itemCount}</span>}
        </div>
      </div>
      {isVisible && (
        <div className="carrito-dropdown">
          <h2 className="carrito-title">Carrito de Compras</h2>
          {isEmpty ? (
            <p className="empty-cart-message">Tu carrito está vacío</p>
          ) : (
            <>
              <ul className="cart-items-list">
                {items.map((item, index) => (
                  <li key={index} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.imagen} alt={item.nombre} />
                    </div>
                    <div className="cart-item-details">
                      <h3 className="cart-item-name">{item.nombre}</h3>
                      <div className="cart-item-price">
                        <span>${item.precio}</span>
                        <span className="cart-item-quantity">x {item.cantidad}</span>
                      </div>
                    </div>
                    <button 
                      className="decrement-button"
                      onClick={(e) => handleDecrement(e, item)}
                      aria-label="Reducir cantidad"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <strong>${totalPrice}</strong>
                </div>
                <button 
                  className="checkout-button"
                  onClick={handleCheckout}
                >
                  Proceder al pago
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Carrito;