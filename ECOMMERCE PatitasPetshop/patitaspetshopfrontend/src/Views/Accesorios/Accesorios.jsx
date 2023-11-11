import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Actions/Actions';
import '../Accesorios/Accesorios.css';
import Cards from '../../components/Cards/Cards';

const Accesorios = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  // Estado local para los filtros de precio y nombre
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(Number.POSITIVE_INFINITY);
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Filtrar los productos con tipo "ACCESORIO" y dentro del rango de precio especificado
  const accesoriosProducts =Array.isArray(allProducts) ? allProducts.filter((product) => {
    return (
      product.tipo === 'ACCESORIO' &&
      product.precio >= precioMin &&
      product.precio <= precioMax &&
      (nombre === '' || product.nombre.toLowerCase().includes(nombre.toLowerCase()))
    );
  }):[];

  // Función para manejar cambios en los filtros
  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    if (name === 'precioMin') {
      setPrecioMin(Number(value));
    } else if (name === 'precioMax') {
      setPrecioMax(Number(value));
    } else if (name === 'nombre') {
      setNombre(value);
    }
  };

  // Función para restablecer los filtros
  const resetFilters = () => {
    setPrecioMin(0);
    setPrecioMax(Number.POSITIVE_INFINITY);
    setNombre('');
  };

  return (
    <div > 
     <div className="filtros-busqueda">
     <div>
       <label htmlFor="precioMin">Precio Mínimo:</label>
       <input
         type="number"
         id="precioMin"
         name="precioMin"
         value={precioMin}
         onChange={handleFilterChange}
       />
     </div>
     <div>
       <label htmlFor="precioMax">Precio Máximo:</label>
       <input
         type="number"
         id="precioMax"
         name="precioMax"
         value={precioMax}
         onChange={handleFilterChange}
       />
     </div>
     <div>
       <label htmlFor="nombre">Buscar por Nombre:</label>
       <input
         type="text"
         id="nombre"
         name="nombre"
         value={nombre}
         onChange={handleFilterChange}
       />
     </div>
     <button onClick={resetFilters}>Restablecer Filtros</button>
     </div>
     
     
     <div>
      {accesoriosProducts.length === 0 ? (
        <h4>Ups!No hay productos disponibles en estos momentos.Contacta al administrador</h4>
        
      ) : (
        <Cards allProducts={accesoriosProducts}></Cards>
      )}
      </div>
   </div>
  );
};

export default Accesorios;