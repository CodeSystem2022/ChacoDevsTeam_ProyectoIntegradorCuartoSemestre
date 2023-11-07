import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Actions/Actions';
import Cards from '../../components/Cards/Cards';
import { Link } from 'react-router-dom'; // Agrega import para Link

const FullProductos = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Link to="/admin">Volver Atrás</Link> {/* Botón para volver a /admin */}
      </div>
      <div>
        <Cards allProducts={allProducts}></Cards> {/* Mostrar todos los productos */}
      </div>
    </div>
  );
};

export default FullProductos;