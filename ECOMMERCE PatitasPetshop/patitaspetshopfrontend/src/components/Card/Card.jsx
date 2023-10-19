import React from 'react'

export const Card = ({nombre,precio,imagen}) => {
  return (
    <div>
       <div className='card-img-cont'>
            <img src={imagen} alt="Imagen del producto" />
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
