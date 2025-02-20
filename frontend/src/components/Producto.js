import React from 'react';
import '../styles/Producto.css';

const Producto = ({ nombre, precio, imagen, agregarAlCarrito }) => {
  return (
    <div className="producto">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <button onClick={() => agregarAlCarrito({ nombre, precio, imagen })}>Agregar al carrito</button>
    </div>
  );
};

export default Producto;
