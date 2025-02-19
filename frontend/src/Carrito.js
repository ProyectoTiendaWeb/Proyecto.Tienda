import React from 'react';

function Carrito({ carrito }) {
  return (
    <div className="carrito">
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((item, index) => (
            <li key={index}>{item.nombre} - ${item.precio}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Carrito;