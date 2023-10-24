import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getProducts } from '../../Redux/Actions/Actions';
import Cards from '../../components/Cards/Cards';


const Accesorios = () => {
  const dispatch=useDispatch();
  const allProducts=useSelector((state)=>state.allProducts)

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  console.log(allProducts)
  const accesoriosProducts = allProducts.filter((product) => product.tipo === 'ACCESORIO');

 return (
   <div>
     <Cards allProducts={accesoriosProducts}></Cards>
   </div>
 );
}
  

export default Accesorios


