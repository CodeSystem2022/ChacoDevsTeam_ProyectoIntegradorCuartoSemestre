import React from 'react';
import { useCarritoContexto } from '../../CarritoContext/CarritoContext';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import ListaCarrito from '../ListaCarrito/ListaCarrito';
import { getProducts } from '../../Redux/Actions/Actions';
import axios from 'axios';

const Carrito = () => {
  const { carrito, totalPrecio} = useCarritoContexto();

  const order = {
    comprador: {},
    items: carrito.map((producto) => ({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: producto.quantity,
    })),
    total: totalPrecio(),
  };

  // Verifica si carrito es undefined o tiene una longitud de 0
  if (!carrito || carrito.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Hacer compras</Link>
      </>
    );
  }

  const handleClic = async () => {
    try {
      // Realiza la solicitud POST a la URL de la orden de compra
      const response = await axios.post('http://localhost:8082/transaction/nuevaTransaccion', order);

      if (response.status === 200) {
        alert('Orden de compra generada con éxito');
        
      } else {

        alert('Hubo un error al procesar la orden de compra');
      }
    } catch (error) {
      console.error(error);
      alert('Hubo un error al procesar la orden de compra');
    }
  };
  
  return (
    <>
      {
        carrito.map(product => <ListaCarrito key={product.id} product={product} />)
      }
      <p>
        Total:${totalPrecio()}
      </p>
      <NavLink to="/identificacion">
          <button >Proceder al pago</button>
      </NavLink>
     
    </>
  );
};

export default Carrito;