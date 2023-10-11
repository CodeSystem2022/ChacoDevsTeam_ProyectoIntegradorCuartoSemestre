import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="logo.jpg" />
      <div className="navbarSearch">
        <input placeholder="Buscar" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          overflow= "visible"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Marcas</li>
          <li>Accesorios</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;