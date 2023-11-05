import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
axios.defaults.headers.common['Accept'] = 'application/json';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/customer/buscarEmail/${email}`);
      if (response.status === 200) {
        // Verifica si el usuario es admin
        const isAdminUser = email === 'admin@admin';
        
        // Guarda el estado de inicio de sesión en localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Guarda el nombre del usuario en localStorage
        localStorage.setItem('userName', response.data.nombre);
        // Guarda el ID del cliente en localStorage
        localStorage.setItem('userId', response.data.id);

        if (isAdminUser) {
          setIsAdmin(true);
          history.push('/admin');
        } else {
          const choice = window.confirm('Inicio de sesión exitoso. ¿Deseas ir al Inicio o al Perfil(presione cancelar)?');
          if (choice) {
            history.push('/');
          } else {
            history.push('/perfil');
          }
        }
      } else {
        setError('Correo electrónico no encontrado');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Usuario o contraseña incorrecta, intente nuevamente por favor');
    }
  };

  const handleLogout = () => {
    // Borra el estado de inicio de sesión y redirige a la página de inicio
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    setIsAdmin(false);
    history.push('/');
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" />
        </div>
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      {isAdmin && (
        <button onClick={handleLogout}>
          Cerrar Sesión
        </button>
      )}
    </div>
  );
};

export default Login;