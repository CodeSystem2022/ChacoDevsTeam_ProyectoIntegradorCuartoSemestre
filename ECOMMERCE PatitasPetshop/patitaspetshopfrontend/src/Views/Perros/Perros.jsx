import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getProducts } from '../../Redux/Actions/Actions';
import Cards from '../../components/Cards/Cards';

const Perros = () => {
  const dispatch=useDispatch();
  const allProducts=useSelector((state)=>state.allProducts)

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

// Filtrar los productos con especie "canina"
const perrosProducts = allProducts.filter((product) => product.especie === 'PERRO');

return (
  <div>
    <Cards allProducts={perrosProducts}></Cards>
  </div>
);
}

export default Perros;

