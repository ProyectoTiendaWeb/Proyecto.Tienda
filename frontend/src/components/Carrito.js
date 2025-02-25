import React, { useState, useEffect } from 'react';
import '../styles/Carrito.css';

// Contador global para identificar instancias
let instanceCounter = 0;

const Carrito = ({ items = [], eliminarDelCarrito, descontarDelCarrito }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isEmpty = items.length === 0;
  
  // Asignar un ID único a cada instancia
  const [instanceId] = useState(() => {
    instanceCounter++;
    return instanceCounter;
  });

  // Agregar logs de depuración detallados
  useEffect(() => {
    console.log(`[Carrito #${instanceId}] Montado con props:`, {
      itemsLength: items.length,
      eliminarDelCarrito: typeof eliminarDelCarrito,
      descontarDelCarrito: typeof descontarDelCarrito
    });
    
    // Trazar la pila de llamadas para ver quién está creando este componente
    console.log(`[Carrito #${instanceId}] Stack trace:`, new Error().stack);
    
    return () => {
      console.log(`[Carrito #${instanceId}] Desmontado`);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Implementar nuestra propia función de descontar si no se proporciona
  const handleDecrement = (e, item) => {
    e.stopPropagation();
    console.log(`[Carrito #${instanceId}] handleDecrement llamado con:`, item);
    console.log(`[Carrito #${instanceId}] Tipo de descontarDelCarrito:`, typeof descontarDelCarrito);
    
    if (typeof descontarDelCarrito === 'function') {
      descontarDelCarrito(item);
    } else {
      console.warn(`[Carrito #${instanceId}] descontarDelCarrito no está definido como función`);
      
      // Implementación local para casos donde no se pasa la función
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

  const itemCount = items.reduce((total, item) => total + item.cantidad, 0);
  const totalPrice = items.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);

  return (
    <div 
      className={`carrito-container ${isVisible ? 'visible' : 'hidden'}`} 
      onClick={isVisible ? null : toggleVisibility}
    >
      {/* Identificador visible para depuración */}
      <div style={{ position: 'absolute', top: '2px', right: '2px', fontSize: '8px', color: '#999' }}>
        #{instanceId}
      </div>
      
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