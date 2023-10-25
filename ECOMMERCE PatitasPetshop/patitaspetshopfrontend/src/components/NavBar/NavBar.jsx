import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import '../Cards/Card.css';

const NavBar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = async () => {
    // Realizar una solicitud HTTP para validar el inicio de sesión con la base de datos
    try {
      const response = await fetch('http://localhost:8081/customer/validarCredenciales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // El inicio de sesión fue exitoso
        setMessage('Ha ingresado correctamente');
        setIsLoggedIn(true);
        // Recupera el nombre del usuario desde la base de datos y establece el estado
        const userData = await response.json();
        setUserName(userData.name);
        setShowLoginForm(false); // Oculta el formulario después de iniciar sesión
      } else {
        // El inicio de sesión falló
        setMessage('Usuario no encontrado');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleLogout = () => {
    // Restablece el estado y borra las credenciales de la sesión
    setEmail('');
    setPassword('');
    setMessage('');
    setIsLoggedIn(false);
    setShowLoginForm(true); // Muestra el formulario después de cerrar sesión
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch('http://localhost:8081/customer/buscarEmail', {
          method: 'GET',
          credentials: 'include', // Incluye las cookies de sesión en la solicitud
        });
  
        if (response.ok) {
          // El usuario ya está autenticado
          setIsLoggedIn(true);
  
          // Obtener detalles del usuario desde la respuesta si corresponde
          const userData = await response.json();
          setUserName(userData.name);
        }
      } catch (error) {
        console.error('Error al verificar la autenticación:', error);
      }
    };
  
    checkAuthentication();
  }, []);

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
            <NavLink to='/carrito'>Carrito de compras</NavLink>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <p>Bienvenido, {userName}!</p>
              </li>
              <li>
                <button className="logout-button" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <li>
              <button className="login-button" onClick={() => setShowLoginForm(true)}>
                Iniciar Sesión
              </button>
            </li>
          )}
        </ul>
      </nav>
      {showLoginForm && (
        <div className="login-form">
          <h2>Iniciar Sesión</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="button" onClick={handleLogin}>Iniciar Sesión</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
};

export default NavBar;