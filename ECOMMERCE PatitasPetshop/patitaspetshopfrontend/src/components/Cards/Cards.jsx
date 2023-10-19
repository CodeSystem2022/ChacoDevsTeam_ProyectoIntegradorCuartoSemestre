import React from 'react'
import { Card } from '../Card/Card';

const Cards = ({allProducts}) => {
  console.log(allProducts)
  return (
    <div className='cards-cont'>
      {allProducts.map((producto)=>
      <Card  nombre={producto.nombre} 
      precio={producto.precio} 
      tipo={producto.tipo}
      stock={producto.stock}
      especie={producto.especie}
      key={producto.id} 
      imagen={producto.imagen} >
      </Card>)}
    </div>
  )
}

export default Cards;