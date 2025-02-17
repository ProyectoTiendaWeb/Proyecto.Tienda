// Producto.js
import React from 'react';
import './Producto.css';

function Producto({ nombre, precio, imagen }) {
  return (
    <div className="producto-card">
      <img src={imagen} alt={nombre} className="producto-imagen" />
      <h3 className="producto-nombre">{nombre}</h3>
      <p className="producto-precio">${precio}</p>
      <button className="producto-boton">Comprar</button>
    </div>
  );
}

export default Producto;
