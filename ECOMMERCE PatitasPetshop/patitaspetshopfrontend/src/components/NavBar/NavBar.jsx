import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import '../NavBar/NavBar.css';

const NavBar = () => {
  // Verifica si el usuario ha iniciado sesión
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    // Elimina los datos de inicio de sesión del almacenamiento local
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    // Redirige al usuario a la página de inicio
    window.location.href = '/';
  };

  return (
    <div className='navbar-cont'>
      <h1 className="logo"><img src="logo.png" alt="" height={100} /></h1>
      <div className='SearchBar'>
        <SearchBar />
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
            <NavLink to='/usuario'>Perfil de usuario</NavLink>
          </li>

          <li>
            {isLoggedIn ? ( // Renderiza el botón "Cerrar Sesión" si el usuario ha iniciado sesión
              <button onClick={handleLogout}>Cerrar Sesión</button>
            ) : (
              <NavLink to='/login'>Iniciar sesión</NavLink>
            )}
          </li>
          <li>
            <NavLink to='/carrito'> <img className='carrito' src="carrito-03.png" height={30} alt="" /></NavLink>
          </li>
         </ul>
      </nav>
    </div>
  );
};

export default NavBar;