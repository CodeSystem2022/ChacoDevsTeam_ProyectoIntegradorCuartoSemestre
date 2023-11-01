import React, { useState } from 'react';
import { useCarritoContexto } from '../../CarritoContext/CarritoContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ListaCarrito from '../ListaCarrito/ListaCarrito';
import { useDispatch } from 'react-redux';
import { postPago } from '../../Redux/Actions/Actions'; // Asume que tienes una acción para realizar el pago

const Carrito = () => {
  const dispatch = useDispatch();
  const { carrito, totalPrecio } = useCarritoContexto();
  
  // Recupera los datos del cliente y el monto total del localStorage
  const idCliente = localStorage.getItem('userId');
  const montoTotal = totalPrecio(); // Reemplaza con el monto total de la compra

  const [state] = useState({
    idCliente: idCliente, // Utiliza el ID del cliente obtenido
    monto: montoTotal, // Utiliza el monto total de la compra
    /*producttransactions: {
      items: carrito.map(producto => ({
        idProducto: producto.id, // ID del producto que se está comprando
        cantidadProducto: producto.quantity // Cantidad que se compra
      }))
    }Esta forma que esta comentada es la de un obj con array*/
    producttransactions: carrito.map(producto => ({
      idProducto: producto.id, // ID del producto que se está comprando
      cantidadProducto: producto.quantity // Cantidad que se compra
    }))
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    //aca ves lo que envia al back
    console.log(state.producttransactions)
    // Envía la solicitud de pago al servidor utilizando Redux y la acción postPago
    dispatch(postPago(state));
  };

  // Verifica si el carrito está vacío
  if (!carrito || carrito.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {
        carrito.map(product => <ListaCarrito key={product.id} product={product} />)
      }
      <p>
        Total:${totalPrecio()}
      </p>
      <form onSubmit={handleSubmit}>
        <Link to="/entrega">
          <button type="submit" onClick={handleSubmit}>Proceder al pago</button>
        </Link>
        
      </form>
    </>
  );
};

export default Carrito;