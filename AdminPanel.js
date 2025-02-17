//Gestión o AdminPanel

import React, { useState } from "react";
import axios from "axios";

const AdminPanel = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: ""
  });

  const handleAddProduct = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/products", newProduct);
      setProducts([...products, response.data]);
      setNewProduct({ name: "", price: "", image: "", description: "" });
    } catch (error) {
      console.error("Error al agregar producto", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error al eliminar producto", error);
    }
  };

  return (
    <div>
      <h2>Panel de Administración</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Precio"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="URL de la imagen"
        value={newProduct.image}
        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={newProduct.description}
        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
      />
      <button onClick={handleAddProduct}>Agregar Producto</button>

      <div>
        {products.map((product) => (
          <div key={product._id}>
            <p>{product.name}</p>
            <button onClick={() => handleDeleteProduct(product._id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;