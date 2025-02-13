import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;