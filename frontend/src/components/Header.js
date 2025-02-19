import React from "react";
import "../styles/Header.css";

const Header = () => {
    return (
      <header className="bg-blue-500 text-white p-6 text-center">
        <h2 className="text-3xl font-bold">Bienvenido a Mi Tienda</h2>
        <p className="text-lg">Los mejores productos al mejor precio</p>
      </header>
    );
  };
  
  export default Header;