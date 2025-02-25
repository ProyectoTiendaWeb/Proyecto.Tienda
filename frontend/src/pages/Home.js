import React from 'react';
import Producto from '../components/Producto';
import Carrito from '../components/Carrito';
import camiseta from '../assets/camiseta.png';
import pantalones from '../assets/pantalones.png';
import botines from '../assets/botines.png';
import '../styles/Home.css';

const Home = ({ agregarAlCarrito, carrito }) => {
  const productos = [
    {
      nombre: "Camiseta Selección",
      precio: 19.99,
      imagen: camiseta
    },
    {
      nombre: "Pantalones Selección",
      precio: 39.99,
      imagen: pantalones
    },
    {
      nombre: "Botines",
      precio: 59.99,
      imagen: botines
    },
    {
      nombre: "Chaqueta",
      precio: 79.99,
      imagen: camiseta
    },
    {
      nombre: "Gorra",
      precio: 14.99,
      imagen: botines
    },
    {
      nombre: "Bufanda",
      precio: 24.99,
      imagen: pantalones
    },
    {
      nombre: "Guantes",
      precio: 19.99,
      imagen: botines
    },
    {
      nombre: "Zapatos",
      precio: 49.99,
      imagen: camiseta
    }
  ];

  return (
    <div>
      <header className="App-header">
        <h1>Bienvenido a nuestra tienda de ropa</h1>
        <p>Explora nuestra colección de moda.</p>
      </header>
      <main>
        <div className="productos-container">
          {productos.map((producto, index) => (
            <Producto
              key={index}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
        <Carrito items={carrito} /> {/* Muestra el carrito */}
      </main>
    </div>
  );
};

export default Home;