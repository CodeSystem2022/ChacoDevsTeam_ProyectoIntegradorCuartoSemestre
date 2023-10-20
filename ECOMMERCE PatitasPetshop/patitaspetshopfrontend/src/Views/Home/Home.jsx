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
    <div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="slider1.jpg" alt="Imagen 1" /></div>
    <div class="swiper-slide"><img src="slider2.jpg" alt="Imagen 2" /></div>
    <div class="swiper-slide"><img src="slider3.jpg" alt="Imagen 3" /></div>
  </div>
  </div>
  )
}

export default Home