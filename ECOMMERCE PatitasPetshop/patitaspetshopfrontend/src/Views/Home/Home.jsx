import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import ListaCarrito from '../../components/ListaCarrito/ListaCarrito';
import '../Home/Home.css';



const Home = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 0,
    });

    
    const interval = setInterval(() => {
      if (swiper) {
        swiper.slideNext(); // Cambia a la siguiente diapositiva
      }
    }, 3000); // Cambiar cada 5 segundos (ajusta el tiempo según tus necesidades)

    return () => {
      clearInterval(interval); // Limpia el intervalo al desmontar el componente
    };
  }, []); // El segundo argumento del useEffect asegura que esto se ejecute solo una vez

  return (
    <div>
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
  
      <div className="iconitos">
        <img src="comida gatito-03.jpg" alt="Image 1"/>
        <img src="alimentos-03.jpg" alt="Image 2" />
        <img src="comida perrito-03.jpg" alt="Image 3" />
      </div>
  
      <div className="bloque">
        <h2>MÁS VENDIDOS</h2>
        {/* Agrega aquí el contenido de los productos más vendidos */}
      </div>
    </div>
  );

  }

export default Home;