import React from 'react'
import ListaCarrito from '../../components/ListaCarrito/ListaCarrito';


const Home = () => {
  


  return (
    <div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="slider1.jpg" alt="Imagen 1" /></div>
    <div class="swiper-slide"><img src="slider2.jpg" alt="Imagen 2" /></div>
    <div class="swiper-slide"><img src="slider3.jpg" alt="Imagen 3" /></div>
  </div>
  <ListaCarrito></ListaCarrito>
  </div>
  )
}

export default Home