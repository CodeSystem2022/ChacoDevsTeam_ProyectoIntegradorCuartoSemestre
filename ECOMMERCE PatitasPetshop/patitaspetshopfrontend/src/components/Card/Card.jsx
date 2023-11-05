import React from 'react'
import '../Card/Card.css'

export const Card = ({nombre,precio,imagen}) => {
  return (
    <div className='Productos'>
          <div className='card-title-cont'>
            <img src={imagen} alt="" />
          </div>

        <div className='card-title-cont'>
            <h4>Nombre:{nombre}</h4>
          </div>

        <div className='card-info-cont'>
            <h5>Precio:{precio} </h5>
        </div>

        
        
    </div>
  )
}
