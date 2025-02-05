import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? <p>El carrito está vacío</p> : 
        cart.map((item) => (
          <div key={item._id}>
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => removeFromCart(item._id)}>Eliminar</button>
          </div>
        ))}
    </div>
  );
};