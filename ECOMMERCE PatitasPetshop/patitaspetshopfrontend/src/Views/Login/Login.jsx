import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../Login/Login.css';
axios.defaults.headers.common['Accept'] = 'application/json';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/customer/buscarEmail/${email}`);
      if (response.status === 200) {
          // Guarda el estado de inicio de sesión en localStorage
          localStorage.setItem('isLoggedIn', 'true');
          // Guarda el nombre del usuario en localStorage
          localStorage.setItem('userName', response.data.nombre);
          // Guarda el ID del cliente en localStorage
          localStorage.setItem('userId', response.data.id);

          const choice = window.confirm('Inicio de sesión exitoso. ¿Deseas ir al Inicio? Presione Aceptar, de lo contrario cancelar para ir al Perfil');

          if (choice) {
            history.push('/');
          } else {
            history.push('/usuario');
          }
        
      } else {
        setError('Correo electrónico no encontrado');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Usuario o contraseña incorrecta, intente nuevamente por favor');
    }
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
    </div>
  );
};

export default Login;