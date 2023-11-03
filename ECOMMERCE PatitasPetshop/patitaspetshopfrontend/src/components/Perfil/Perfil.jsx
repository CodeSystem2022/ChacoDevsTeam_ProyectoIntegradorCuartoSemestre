import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Perfil = () => {
  const [historialCompras, setHistorialCompras] = useState([]);
  const idCliente = localStorage.getItem('userId'); // Obtiene el ID del cliente desde localStorage

  useEffect(() => {
    const fetchHistorialCompras = async () => {
      try {
        const response = await axios.get('http://localhost:8082/transaction/listarTransacciones');
        if (response.status === 200) {
          // La respuesta contiene el historial de compras del cliente.
          const historialComprasData = response.data;
          setHistorialCompras(historialComprasData);
        } else {
          // Manejar errores o situaciones donde no se pueda obtener el historial de compras.
          console.error('Error al obtener el historial de compras');
        }
      } catch (error) {
        console.error('Error al obtener el historial de compras:', error);
      }
    };

    fetchHistorialCompras();
  }, [idCliente]);

  return (
    <div>
      <h2>Historial de Compras</h2>
      {historialCompras.length > 0 ? (
        <ul>
          {historialCompras.map((compra) => (
            <li key={compra.id}>
              <p>Fecha: {compra.fechaTransaccion}</p>
              <p>Monto: ${compra.monto}</p>
              <p>Canal: {compra.canal}</p>
              <p>Nombre del Producto: {compra.producttransactions[0].nombreProducto}</p> {/* Asegúrate de ajustar la propiedad correcta */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay historial de compras disponibles.</p>
      )}
    </div>
  );
};

export default Perfil;