import React from 'react'
import { Card } from '../Card/Card';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../Cards/Cards.css';

const Cards = ({ allProducts }) => {

  return (
    <div>
      <div className="product-container">
        {allProducts.map((producto) => (
          <Link to={`/detail/${producto.id}`} key={producto.id}>
              <Card
                nombre={producto.nombre}
                precio={producto.precio}
                imagen={producto.imagen}
                id={producto.id}
              />
          </Link>
        ))}
      </div>
    </div>
  );

};

export default Cards;