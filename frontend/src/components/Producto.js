import React from 'react';
import '../styles/Producto.css';

const Producto = ({ nombre, precio, imagen, agregarAlCarrito }) => {
  return (
    <div className="producto-card">
      <img src={imagen} alt={nombre} className="producto-imagen" />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <button onClick={() => agregarAlCarrito({ nombre, precio, imagen })}>Agregar al carrito</button>
    </div>
  );
};

export default Producto;