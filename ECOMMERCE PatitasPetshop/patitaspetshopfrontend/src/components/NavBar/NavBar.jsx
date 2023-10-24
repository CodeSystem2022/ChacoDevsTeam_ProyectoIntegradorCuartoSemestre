import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import SearchBar from '../SearchBar/SearchBar';
import '../Cards/Card.css'

const NavBar  = () => {
  return (
    <div className='navbar-cont'>
       <h1 class="logo" ><img src="logo.png" alt="" height={100} /></h1>
      <div className='SearchBar'>
        <SearchBar/>
      </div>
      <nav className='nav-menu'>
        <ul>
          <li>
            <NavLink to='/form'>Registro</NavLink>
          </li>
          <li>
            <NavLink to='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/perros'>Perros</NavLink>
          </li>
          <li>
            <NavLink to='/gatos'>Gatos</NavLink>
          </li>
          <li>
            <NavLink to='/accesorios'>Accesorios</NavLink>
          </li>
          <li>
            <NavLink to='/sucursales'>Sucursales</NavLink>
          </li>
          <li>
            <NavLink to='/carrito'>Carrito de compras</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default NavBar;
