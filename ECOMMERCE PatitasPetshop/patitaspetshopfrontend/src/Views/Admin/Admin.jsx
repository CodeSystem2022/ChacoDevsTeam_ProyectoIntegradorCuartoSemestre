import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Admin = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Realiza las tareas de cierre de sesión aquí, como eliminar los datos de inicio de sesión del almacenamiento local
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');

    // Redirige al usuario a la página principal
    history.push('/');

    // También puedes agregar más lógica de cierre de sesión si es necesario
  };

  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Elige una opción:</p>
      <div>
        <li>
          <Link to="/transacciones">Ver Transacciones</Link>
        </li>
        <li>
          <Link to="/control">Gestionar Productos</Link>
        </li>
        <li>
          <Link to="/fullProductos">Ver todos los productos</Link>
        </li>
      </div>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Admin;