// App.js
import React from 'react';
import './App.css';
import Producto from './Producto';
import Navbar from './components/Navbar'; // Importación del Navbar
import camiseta from './assets/camiseta.png';
import pantalones from './assets/pantalones.png';
import botines from './assets/botines.png';

function App() {
  return (
    <div className="App">
      {/* Navbar agregado aquí */}
      <Navbar />
      
      <header className="App-header">
        <h1>Bienvenido a nuestra tienda de ropa</h1>
        <p>Explora nuestra colección de moda.</p>
      </header>

      <main>
        <div className="productos">
          <Producto nombre="Camiseta Seleccion" precio="19.99" imagen={camiseta} />
          <Producto nombre="Pantalones Seleccion" precio="39.99" imagen={pantalones} />
          <Producto nombre="Botines" precio="59.99" imagen={botines} />
        </div>
      </main>
    </div>
  );
}

export default App;
