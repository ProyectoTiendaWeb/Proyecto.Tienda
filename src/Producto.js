import React from 'react';
import './Producto.css';

function Producto({ nombre, precio, imagen, agregarAlCarrito }) {
  return (
    <div className="producto">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>${precio.toFixed(2)}</p>
      <button onClick={() => agregarAlCarrito({ nombre, precio, imagen })}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default Producto;
