import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import ListaCarrito from '../../components/ListaCarrito/ListaCarrito';

const Home = () => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10, // Espacio entre las imágenes
    centeredSlides: true, // Centra las imágenes
  });

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <Link to="/gatos">
            <img src="slider1.jpg" alt="Imagen 1" />
          </Link>
        </div>
        <div className="swiper-slide">
          <Link to="/perros">
            <img src="slider2.jpg" alt="Imagen 2" />
          </Link>
        </div>
        <div className="swiper-slide">
          <Link to="/accesorios">
            <img src="slider3.jpg" alt="Imagen 3" />
          </Link>
        </div>
      </div>
      <ListaCarrito />
    </div>
  );
}

export default Home;