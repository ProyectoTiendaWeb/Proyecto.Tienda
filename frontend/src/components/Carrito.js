import React from 'react';
import '../styles/Carrito.css';

function Carrito({ carrito }) {
  return (
    <div className="carrito">
      <h2>🛒 Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((producto, index) => (
            <li key={index}>
              <img src={producto.imagen} alt={producto.nombre} width="50" />
              {producto.nombre} - ${producto.precio.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Carrito;
