import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Actions/Actions';
import { Link } from 'react-router-dom'; 
import '../FullProductos/FullProductos.css';

const FullProductos = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Link to="/admin" className="botonvolver">Volver Atrás</Link> {/* Botón para volver a /admin */}
      </div>
      <div className="product-container">
        {allProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imagen} alt={product.nombre} />
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p className="price">${product.precio}</p>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullProductos;