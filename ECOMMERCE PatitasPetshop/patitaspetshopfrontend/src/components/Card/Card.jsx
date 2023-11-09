import React from 'react';
import '../Card/Card.css';

export const Card = ({ nombre, precio, imagen }) => {
  return (

    <div className="product-card"> {/* Aplica la clase .product-card */}
      <div className='card-title-cont'>
        <h4>
          <img src={imagen} alt="" />
        </h4>
      </div>

      <div className='card-title-cont'>
        <h4>{nombre}</h4>
      </div>

      <p className='price'>${precio}</p>
    </div>
  );
};
