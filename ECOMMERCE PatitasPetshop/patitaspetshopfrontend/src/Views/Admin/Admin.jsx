import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Elige una opción:</p>
      <ul>
        <li>
          <Link to="/transacciones">Ver Transacciones</Link>
        </li>
        <li>
          <Link to="/control">Gestionar Productos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Admin;