import React, { useState, useEffect } from 'react';

const Transacciones = () => {
  const [transacciones, setTransacciones] = useState([]);
  
  const listarTransacciones = async () => {
    try {
      const response = await fetch('http://localhost:8082/transaction/listarTransacciones');

      if (response.ok) {
        const data = await response.json();
        setTransacciones(data);
      } else {
        // Manejar errores si la solicitud no es exitosa.
      }
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    listarTransacciones();
  }, []);

  return (
    <div>
      <button onClick={listarTransacciones}>Ver Transacciones</button>
      {transacciones.map((transaccion) => (
        <div key={transaccion.id}>
          <p>Transacción ID: {transaccion.id}</p>
          <p>Descripción: {transaccion.descripcion}</p>
         
        </div>
      ))}
    </div>
  );
};

export default Transacciones;