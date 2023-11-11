import axios from "axios";
import { GET_PRODUCTS } from "./Actions-type";

export  function getProducts(){
    return async function(dispatch){
        try {
            const response=await axios.get('http://localhost:8083/product/listarProductos')
            console.log(response.data)
            dispatch({
                type:GET_PRODUCTS,
                payload:response.data
                
            })
        } catch (error) {
            console.log(error)
            alert(error.response.data.error)
            
        }
    }
}

export function postUser(state){
    return async function(){
        try {
            await axios.post('http://localhost:8081/customer/nuevoCliente',state)
            alert('Cliente registrado!')
        } catch (error) {
            console.log(error)
           alert(error.response.error)}
    }
}


export function postProducto(state){
    return async function(){
        try {
            await axios.post('http://localhost:8083/product/nuevoProducto',state)
            console.log(state)
            alert("Producto registrado")

        } catch (error) {
            console.log(error)
           }
    }
}

export function postPago(state){
    return async function(){
        try {
            await axios.post('http://localhost:8082/transaction/nuevaTransaccion',state)
            console.log(state)
            console.log("Pago registrado")

        } catch (error) {
            console.log(error)
           }
    }
}



export function alimentoByNombre(nombre) {
  return async (dispatch) => {
    try {
      const endPoint = `http://localhost:8083/product/obtenerProducto/nombre/${nombre}`;
      const response = await axios.get(endPoint);

      dispatch({
        type: 'GET_PRODUCTS', // Cambiado de GET_PRODUCTS a ALIMENTO_POR_NOMBRE según tu caso
        payload: [response.data],
      });
    } catch (error) {
      alert('No se encontró el producto');
    }
  };
}




