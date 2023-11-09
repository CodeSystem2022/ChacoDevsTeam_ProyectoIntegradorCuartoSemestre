import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../Admin/Admin.css';

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
    <div className='Panel'>
      <h1 className="heading">Panel de Administración</h1>
      <p>Elige una opción:</p>
      <div>
        <ul className="linkList">
          <li>
            <Link to="/transacciones" className="link">
              Ver Transacciones
            </Link>
          </li>
          <li>
            <Link to="/control" className="link">
              Gestionar Productos
            </Link>
          </li>
          <li>
            <Link to="/fullProductos" className="link">
              Ver todos los productos
            </Link>
          </li>
        </ul>
      </div>
      <button className="button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Admin;