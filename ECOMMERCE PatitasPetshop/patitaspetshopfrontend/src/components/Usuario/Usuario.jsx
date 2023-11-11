import React from 'react';
import { Link } from 'react-router-dom';

const Usuario = () => {
  // Obtener el estado de inicio de sesión del localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Obtener el nombre de usuario del localStorage
  const userName = localStorage.getItem('userName');
  console.log(userName);

  return (
    <div>
      {isLoggedIn ? (
        <>
          {userName === 'admin' ? (
            <button>
              <Link to="/admin">Panel de Administracion</Link>
            </button>
          ) : (
            <button>
              <Link to="/perfil">Perfil de usuario</Link>
            </button>
          )}
        </>
      ) : (
        <p>No has iniciado sesión. Por favor, accede para ver tu perfil.</p>
      )}
    </div>
  );
};

export default Usuario;