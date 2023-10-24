import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Actions/Actions';
import Cards from '../../components/Cards/Cards';

const Gatos = () => {
const dispatch = useDispatch();
const allProducts = useSelector((state) => state.allProducts);

useEffect(() => {
  dispatch(getProducts());
}, [dispatch]);

// Filtrar los productos con especie "felino"
const gatosProducts = allProducts.filter((product) =>   product.tipo==="ALIMENTO"&& product.especie === 'GATO');

return (
  <div>
    <Cards allProducts={gatosProducts}></Cards>
  </div>
);
}

export default Gatos;






