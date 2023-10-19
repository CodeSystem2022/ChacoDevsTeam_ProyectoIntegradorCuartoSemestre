import React from 'react'
import {  NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
  return (
    <div>
        <div className='navbar-cont'>
          <div>
            <SearchBar></SearchBar>
          </div>
          <div>
            <NavLink to={'/form'}>Registro</NavLink>
          </div>
          <button>
            <NavLink to={'/'}>Inicio</NavLink>
          </button>
          <button>
            <NavLink to={'/perros'}>Perros</NavLink>
          </button>
          <button>
            <NavLink to={'/gatos'}>Gatos</NavLink>
          </button>
          <button>
            <NavLink to={'/accesorios'}>Accesorios</NavLink>
          </button>
          <button>
            <NavLink to={'/sucursales'}>Sucursales</NavLink>
          </button>
         
         
  
        </div>
        
    </div>
  )
}

export default NavBar;