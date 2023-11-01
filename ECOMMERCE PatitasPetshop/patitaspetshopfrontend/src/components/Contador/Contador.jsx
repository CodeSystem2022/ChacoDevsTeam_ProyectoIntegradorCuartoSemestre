import React, { useState } from 'react'

const Contador = ({initial,stock,onAdd}) => {
    const [contador,setContador]=useState(parseInt(initial))

    const decrease= ()=>{
        setContador(contador-1)
    }
    const increase= ()=>{
        setContador(contador+1)
    }
  

  return (
    <div>
        <button disabled={contador <=1}onClick={decrease}>-</button>
        <span>{contador}</span>
        <button disabled={contador >= stock}onClick={increase}>+</button>
        <div>
            <button disabled={stock<=0} onClick={()=>onAdd(contador)}>Agregar al carrito</button>
        </div>




    </div>
  )
}

export default Contador