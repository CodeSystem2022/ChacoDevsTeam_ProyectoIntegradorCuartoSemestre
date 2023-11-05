import React from 'react'
import { Card } from '../Card/Card';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Cards = ({ allProducts }) => {

  return (
    <div className="cards-cont">
      {allProducts.map((producto) => (
        <Link to={`/detail/${producto.id}`} key={producto.id}>
             <Card
               nombre={producto.nombre}
               precio={producto.precio}
               codigo={producto.codigo}
               id={producto.id}
             />
        </Link>
      ))}
    </div>
  );
};

export default Cards;