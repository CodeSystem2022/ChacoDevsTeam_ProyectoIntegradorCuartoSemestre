import React, { useState } from 'react';
import { useCarritoContexto } from '../../CarritoContext/CarritoContext';
import { Link, useHistory } from 'react-router-dom';
import ListaCarrito from '../ListaCarrito/ListaCarrito';
import { useDispatch } from 'react-redux';
import { postPago } from '../../Redux/Actions/Actions';
import '../Carrito/Carrito.css';

const Carrito = () => {
  const dispatch = useDispatch();
  const {carrito, totalPrecio } = useCarritoContexto();
  const history = useHistory();
  
  const idCliente = localStorage.getItem('userId');
  const montoTotal = totalPrecio();
  const [opcionPago, setOpcionPago] = useState(''); // Estado para almacenar la opción de pago

  const [state] = useState({
    idCliente: idCliente,
    canal:'',
    monto: montoTotal,
    producttransactions: carrito.map(producto => ({
      idProducto: producto.id,
      cantidadProducto: producto.quantity
    })),
  });

  const handleOpcionPagoChange = (e) => {
    setOpcionPago(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    let canal = '';
    if (opcionPago === 'mercadopago') {
      canal = 'MERCADO_PAGO';
    } else if (opcionPago === 'tarjeta') {
      canal = 'TARJETA_CREDITO';
    } else if (opcionPago === 'efectivo') {
      canal = 'EFECTIVO';
    }
    
    // Agregar el valor de 'canal' al objeto 'state'
    state.canal = canal;

    console.log(state.producttransactions);
    dispatch(postPago(state));
    // Después de confirmar la compra, redirige al usuario a la página de entrega
    history.push('/entrega');
  };

  if (!carrito || carrito.length === 0) {
    return (
      <>
      <div className='nohay'>
        <p>No hay elementos en el carrito</p>
        <Link to='/' className="botoncompras">Hacer compras</Link>
        </div>
      </>
    );
  }

  return (
    <>
      {carrito.map(product => <ListaCarrito key={product.id} product={product} />)}
      <p>Total: ${totalPrecio()}</p>
      
      <div>
        <h3>Medio de Pago:</h3>
        <div>
          <input
            type="radio"
            id="mercadopago"
            name="opcionPago"
            value="mercadopago"
            checked={opcionPago === 'mercadopago'}
            onChange={handleOpcionPagoChange}
          />
          <label htmlFor="mercadopago">Mercado Pago</label>
        </div>
        <div>
          <input
            type="radio"
            id="tarjeta"
            name="opcionPago"
            value="tarjeta"
            checked={opcionPago === 'tarjeta'}
            onChange={handleOpcionPagoChange}
          />
          <label htmlFor="tarjeta">Tarjeta de Crédito/Débito</label>
        </div>
        <div>
          <input
            type="radio"
            id="efectivo"
            name="opcionPago"
            value="efectivo"
            checked={opcionPago === 'efectivo'}
            onChange={handleOpcionPagoChange}
          />
          <label htmlFor="transferencia">Efectivo</label>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <button type="submit">Confirmar compra y continuar a entrega</button>
      </form>
    </>
  );
};

export default Carrito;