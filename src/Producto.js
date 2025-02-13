import React from 'react';

function Producto({ nombre, precio, imagen }) {
  return (
    <div className="producto">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </div>
  );
}

export default Producto;