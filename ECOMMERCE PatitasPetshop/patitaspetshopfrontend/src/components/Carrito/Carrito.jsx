import React, { useState } from 'react';
import { useCarritoContexto } from '../../CarritoContext/CarritoContext';
import { Link, useHistory } from 'react-router-dom';
import ListaCarrito from '../ListaCarrito/ListaCarrito';
import { useDispatch } from 'react-redux';
import { postPago } from '../../Redux/Actions/Actions';

const Carrito = () => {
  const dispatch = useDispatch();
  const { carrito, totalPrecio } = useCarritoContexto();
  const history = useHistory();
  
  const idCliente = localStorage.getItem('userId');
  const montoTotal = totalPrecio();

  const [state] = useState({
    idCliente: idCliente,
    monto: montoTotal,
    producttransactions: carrito.map(producto => ({
      idProducto: producto.id,
      cantidadProducto: producto.quantity
    }))
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state.producttransactions);
    dispatch(postPago(state));
    // Después de confirmar la compra, redirige al usuario a la página de entrega
    history.push('/entrega');
  };

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
      {carrito.map(product => <ListaCarrito key={product.id} product={product} />)}
      <p>Total: ${totalPrecio()}</p>
      <form onSubmit={handleSubmit}>
        <button type="submit">Confirmar compra y continuar a entrega</button>
      </form>
    </>
  );
};

export default Carrito;