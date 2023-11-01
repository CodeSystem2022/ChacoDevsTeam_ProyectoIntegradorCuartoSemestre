import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Identificacion = () => {
  const history = useHistory();

  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    celular: '',
  });

  const [ setEstaRegistrado] = useState(false);

  // Simula que el usuario está registrado, ajusta esto según tu lógica real
  const usuarioRegistrado = true;

  useEffect(() => {
    if (usuarioRegistrado) {
      // Si el usuario está registrado, obtén sus datos
      // Puedes obtener estos datos de tu backend
      setUsuario({
        nombre: 'Nombre del Usuario',
        apellido: 'Apellido del Usuario',
        email: 'usuario@example.com',
        direccion: 'Dirección del Usuario',
        celular: '1234567890',
      });
      setEstaRegistrado(true);
    }
  }, [usuarioRegistrado]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar acciones adicionales, como enviar los datos a tu servidor si es necesario

    // Redirige al usuario al componente de entrega
    history.push('/entrega');
  };

  return (
    <div>
      <h1>Identificación</h1>
      <h5>Solicitamos únicamente la información esencial para la finalización de la compra</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={usuario.nombre} onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })} />
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" name="apellido" value={usuario.apellido} onChange={(e) => setUsuario({ ...usuario, apellido: e.target.value })} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={usuario.email} onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" name="direccion" value={usuario.direccion} onChange={(e) => setUsuario({ ...usuario, direccion: e.target.value })} />
        </div>
        <div>
          <label>Celular:</label>
          <input type="text" name="celular" value={usuario.celular} onChange={(e) => setUsuario({ ...usuario, celular: e.target.value })} />
        </div>
        <button type="submit">Ir para la entrega</button>
      </form>
    </div>
  );
};

export default Identificacion;





