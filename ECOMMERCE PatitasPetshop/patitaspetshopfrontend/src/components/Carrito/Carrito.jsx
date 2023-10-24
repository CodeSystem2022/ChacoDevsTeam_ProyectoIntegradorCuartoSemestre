import React from 'react';
import { useCarritoContexto } from '../../CarritoContext/CarritoContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ListaCarrito from '../ListaCarrito/ListaCarrito';

const Carrito = () => {
  const { carrito, totalPrecio} = useCarritoContexto();

  // Verifica si carrito es undefined o tiene una longitud de 0
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
     
    </>
  );
};

export default Carrito;