import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Actions/Actions';
import Cards from '../../components/Cards/Cards';
import '../Accesorios/Accesorios.css';

const Perros = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  // Estado local para los filtros de precio, tipo y marca
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(Number.POSITIVE_INFINITY);
  const [tipo, setTipo] = useState('');
  const [marca, setMarca] = useState('');

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Filtrar los productos con especie "canina", dentro del rango de precio, tipo y marca especificados
  const perrosProducts = Array.isArray(allProducts)? allProducts.filter((product) => {
    return (
      product.especie === 'PERRO' &&
      product.tipo === 'ALIMENTO' && // Agregar esta línea
      product.precio >= precioMin &&
      product.precio <= precioMax &&
      (marca === '' || product.marca === marca)
    );
  }):[];

  // Función para manejar cambios en los filtros
  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    if (name === 'precioMin') {
      setPrecioMin(Number(value));
    } else if (name === 'precioMax') {
      setPrecioMax(Number(value));
    } else if (name === 'tipo') {
      setTipo(value);
    } else if (name === 'marca') {
      setMarca(value);
    }
  };

  // Función para restablecer los filtros
  const resetFilters = () => {
    setPrecioMin(0);
    setPrecioMax(Number.POSITIVE_INFINITY);
    setTipo('');
    setMarca('');
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
        <label htmlFor="tipo">Tipo (seco/húmedo):</label>
        <select id="tipo" name="tipo" value={tipo} onChange={handleFilterChange}>
          <option value="">Cualquiera</option>
          <option value="SECO">Seco</option>
          <option value="HUMEDO">Húmedo</option>
        </select>
      </div>
      <div>
        <label htmlFor="marca">Marca:</label>
        <select id="marca" name="marca" value={marca} onChange={handleFilterChange}>
          <option value="">Cualquiera</option>
          <option value="Dogchow">Dogchow</option>
          <option value="Sieger">Sieger</option>
          <option value="Dog selection">Dog selection</option>
        </select>
      </div>
      <button onClick={resetFilters}>Restablecer Filtros</button>
      </div>
      <div>
      {perrosProducts.length === 0 ? (
        <h4>Ups!No hay productos disponibles en estos momentos.Contacta al administrador</h4>
        
      ) : (
        <Cards allProducts={perrosProducts}></Cards>
      )}
      </div>
      
      
    </div>
    
  );
};

export default Perros;