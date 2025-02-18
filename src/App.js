import React, { useState } from 'react';
import './App.css';
import Producto from './Producto';
import Navbar from "./components/Navbar";
import Carrito from "./components/Carrito";
import camiseta from './assets/camiseta.png';
import pantalones from './assets/pantalones.png';
import botines from './assets/botines.png';

function App() {
  const [carrito, setCarrito] = useState([]); // Estado del carrito

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]); // Agrega el producto al array
  };

  return (
    <div className="App">
      <Navbar carrito={carrito} /> {/* Pasa el carrito al Navbar */}
      <header className="App-header">
        <h1>Bienvenido a nuestra tienda de ropa</h1>
        <p>Explora nuestra colección de moda.</p>
      </header>
      <main>
        <div className="productos-container">
          <Producto nombre="Camiseta Selección" precio={19.99} imagen={camiseta} agregarAlCarrito={agregarAlCarrito} />
          <Producto nombre="Pantalones Selección" precio={39.99} imagen={pantalones} agregarAlCarrito={agregarAlCarrito} />
          <Producto nombre="Botines" precio={59.99} imagen={botines} agregarAlCarrito={agregarAlCarrito} />
        </div>
        <Carrito carrito={carrito} /> {/* Muestra el carrito */}
      </main>
    </div>
  );
}

export default App;


