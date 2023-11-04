import axios from "axios";
import { useEffect, useState } from "react";

const Perfil = () => {
  const [historialCompras, setHistorialCompras] = useState([]);
  const [producto, setProducto] = useState({});
  const idCliente = localStorage.getItem('userId');

  const cargarProducto = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8083/product/obtenerProducto/${id}`);
      if (response.status === 200) {
        const productoData = response.data;
        setProducto(productoData);
      } else {
        console.error('Error al obtener la información del producto');
      }
    } catch (error) {
      console.error('Error al obtener la información del producto:', error);
    }
  };

  useEffect(() => {
    const fetchHistorialCompras = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/transaction/transaccionesCliente/${idCliente}`);
        if (response.status === 200) {
          const historialComprasData = response.data;
          setHistorialCompras(historialComprasData);
        } else {
          console.error('Error al obtener el historial de compras');
        }
      } catch (error) {
        console.error('Error al obtener el historial de compras:', error);
      }
    };

    fetchHistorialCompras();
  }, [idCliente]);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div>
      <h2>Historial de Compras</h2>
      {isLoggedIn ? (
        <>
          {historialCompras.length > 0 ? (
            <ul>
              {historialCompras.map((compra) => (
                <li key={compra.id}>
                  <p>Fecha: {compra.fechaTransaccion}</p>
                  <p>Monto: ${compra.monto}</p>
                  <p>Medio de pago: {compra.canal}</p>
                  <p>Productos comprados:</p>
                  <ul>
                    {compra.producttransactions.map((productoTransaccion) => (
                      <li key={productoTransaccion.id}>
                        <div>Cantidad: {productoTransaccion.cantidadProducto}</div>
                        <div>
                           Nombre:{}
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay historial de compras disponibles.</p>
          )}
        </>
      ) : (
        <p>No estás logueado, inicia sesión para continuar.</p>
      )}
    </div>
  );
};

export default Perfil;