import axios from "axios";
import { useEffect, useState } from "react";
import '../Perfil/Perfil.css';

const Perfil = () => {
  const [historialCompras, setHistorialCompras] = useState([]);
  const [productoInfo, setProductoInfo] = useState({});
  const idCliente = localStorage.getItem('userId');

  useEffect(() => {
    const fetchHistorialCompras = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/transaction/transaccionesCliente/${idCliente}`);
        if (response.status === 200) {
          const historialComprasData = response.data;
          setHistorialCompras(historialComprasData);

          // Obtener los IDs de producto únicos del historial de compras
          const uniqueProductIds = Array.from(new Set(historialComprasData.map(compra => compra.producttransactions.map(producto => producto.id)).flat()));

          // Realizar solicitudes para obtener información de productos
          const productoPromises = uniqueProductIds.map(async (productId) => {
            const productResponse = await axios.get(`http://localhost:8083/product/obtenerProducto/${productId}`);
            return { id: productId, nombre: productResponse.data.nombre };
          });

          const productosInfo = await Promise.all(productoPromises);

          // Crear un mapa para buscar el nombre del producto por ID
          const productoInfoMap = {};
          productosInfo.forEach(info => {
            productoInfoMap[info.id] = info.nombre;
          });

          // Actualizar el estado con la información del producto
          setProductoInfo(productoInfoMap);
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
                <div className="historial">
                <li key={compra.id}>
                  <p>Fecha: {compra.fechaTransaccion}</p>
                  <p>Monto: ${compra.monto}</p>
                  <p>Medio de pago: {compra.canal}</p>
                  <p>Productos comprados:</p>
                  <ul >
                    {compra.producttransactions.map((productoTransaccion) => (
                      <li key={productoTransaccion.id}>
                        <div className="Textohistorial">Cantidad: {productoTransaccion.cantidadProducto}</div>
                        <div className="Textohistorial">Nombre: {productoInfo[productoTransaccion.id] || 'Cargando...'}</div>
                      </li>
                    ))}
                  </ul>
                </li>
                </div>
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