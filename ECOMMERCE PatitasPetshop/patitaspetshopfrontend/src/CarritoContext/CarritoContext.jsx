import React, { useContext, useEffect, useState } from 'react'
const CarritoContexto=React.createContext([])

export const useCarritoContexto = () => useContext(CarritoContexto)
const CarritoProvider = ({children}) =>{
  const [carrito,setCarrito]=useState([]);
  const limpiarCarrito=()=>setCarrito([]);
  
  const enElCarrito = (id) => carrito.find(producto => producto.id===id)? true :false;
  const borrarCarrito = (id) => setCarrito(carrito.filter(producto => producto.id !== id));
  const addCarrito=(item,quantity)=>{
    if(enElCarrito(item.id)){
      setCarrito(carrito.map(producto=>{
        return producto.id ===item.id ? {...producto,quantity:producto.quantity+quantity}:producto
      }))
    }else{
      setCarrito([...carrito,{...item,quantity}]);
    }
  }

  
  const totalPrecio=()=>{ 
    return carrito.reduce((prev,act)=>prev +act.quantity*act.precio,0)
  }
  const totalProductos= () => carrito.reduce((acumulador,productoActual) => acumulador +productoActual.quantity,0)
  useEffect(() => {
    // Guardar el precioTotal en localStorage cuando el carrito cambia
    const precioTotal = totalPrecio();
    localStorage.setItem('monto', precioTotal.toString());
  }, [carrito]);
  console.log("Carrito: ",carrito)
  
  return (
    <CarritoContexto.Provider value={{
      limpiarCarrito,
      enElCarrito,
      borrarCarrito,
      addCarrito,
      totalPrecio,
      totalProductos,
      carrito
    }}>
        {children}
    </CarritoContexto.Provider>
  )
}

export default CarritoProvider