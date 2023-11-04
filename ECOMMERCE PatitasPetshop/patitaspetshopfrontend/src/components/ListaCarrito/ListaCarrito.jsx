import React from 'react'
import { useCarritoContexto } from '../../CarritoContext/CarritoContext';


const ListaCarrito = ({product}) => {
    const {borrarCarrito}=useCarritoContexto();
    if (!product) {
      
        return null; // O muestra un mensaje de carga o un comportamiento alternativo
      }
    
    return (
      <div>
        <img src={product.imagen} alt={product.nombre} />
        <div>
          <p>Nombre: {product.nombre}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio unitario: {product.precio}</p>
          <p>Subtotal: ${product.quantity * product.precio}</p>
          <button onClick={()=>borrarCarrito(product.id)}>Eliminar</button>
        </div>
      </div>
    );
  }

export default ListaCarrito