import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} width="100" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;