import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getProducts } from '../../Redux/Actions/Actions';
import Cards from '../../components/Cards/Cards';


const Home = () => {
  const dispatch=useDispatch();
  const allProducts=useSelector((state)=>state.allProducts)

  useEffect(()=>{
    dispatch(getProducts())
  },[])


  return (
    <div>
      <h1>Home</h1>
      <h2>Aca se deberia renderizar el home</h2>
      <div>
        <Cards allProducts={allProducts}></Cards>
      </div>
    </div>
  )
}

export default Home