import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../Transacciones/Transacciones.css';
const Transacciones = () => {
  const [transacciones, setTransacciones] = useState([]);
  const [clienteInfo, setClienteInfo] = useState({});
  const [productoInfo, setProductoInfo] = useState({});
  const history = useHistory();

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

  const obtenerInformacionProducto = async (idProducto) => {
    try {
      const response = await fetch(`http://localhost:8083/product/obtenerProducto/${idProducto}`);
  
      if (response.ok) {
        const productoData = await response.json();
        // Actualiza el estado con la información del producto
        setProductoInfo((prevProductoInfo) => ({
          ...prevProductoInfo,
          [idProducto]: productoData,
        }));
      } else {
        // Manejar errores si la solicitud no es exitosa.
      }
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerInformacionCliente = async (idCliente) => {
    try {
      const response = await fetch(`http://localhost:8081/customer/buscarId/${idCliente}`);

      if (response.ok) {
        const clienteData = await response.json();
        // Actualiza el estado con la información del cliente
        setClienteInfo((prevClienteInfo) => ({
          ...prevClienteInfo,
          [idCliente]: {
            email: clienteData.email,
            nombre: clienteData.nombre,
            apellido: clienteData.apellido,
            celular: clienteData.celular,
          },
        }));
      } else {
        // Manejar errores si la solicitud no es exitosa.
      }
    } catch (error) {
      console.error(error);
    }
  };

  const volverAAdmin = () => {
    history.push('/admin');
  };

  useEffect(() => {
    listarTransacciones();
  }, []);

  useEffect(() => {
    // Llama a obtenerInformacionCliente para cada ID de cliente en las transacciones
    transacciones.forEach((transaccion) => {
      obtenerInformacionCliente(transaccion.idCliente);
    });

    // Llama a obtenerInformacionProducto para cada ID de producto en las transacciones
    transacciones.forEach((transaccion) => {
      transaccion.producttransactions.forEach((productoTransaccion) => {
        obtenerInformacionProducto(productoTransaccion.idProducto);
      });
    });
  }, [transacciones]);

  return (
    <div>
      <button onClick={listarTransacciones}>Ver Transacciones</button>
      <button onClick={volverAAdmin}>Volver atrás</button>

      {transacciones.map((transaccion) => (
        <div className='transacciones' key={transaccion.id}>
          <p>Transacción ID: {transaccion.id}</p>
          <p>Email del Cliente: {clienteInfo[transaccion.idCliente]?.email}</p>
          <p>Nombre y Apellido del Cliente: {clienteInfo[transaccion.idCliente]?.nombre} {clienteInfo[transaccion.idCliente]?.apellido}</p>
          <p>Celular del Cliente: {clienteInfo[transaccion.idCliente]?.celular}</p>
          <p>Monto: ${transaccion.monto}</p>
          <p>Fecha de Transacción: {transaccion.fechaTransaccion}</p>
          <p>Canal: {transaccion.canal}</p>
          
          <p>Detalles del Producto:</p>
          {transaccion.producttransactions.map((productoTransaccion) => (
            <div key={productoTransaccion.id}>
              <p>Nombre del Producto: {productoInfo[productoTransaccion.idProducto]?.nombre}</p>
              <p>Cantidad: {productoTransaccion.cantidadProducto}</p>
              <p>Precio Unitario: ${productoInfo[productoTransaccion.idProducto]?.precio}</p>
              <img src={productoInfo[productoTransaccion.idProducto]?.imagen} alt="Producto" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Transacciones;