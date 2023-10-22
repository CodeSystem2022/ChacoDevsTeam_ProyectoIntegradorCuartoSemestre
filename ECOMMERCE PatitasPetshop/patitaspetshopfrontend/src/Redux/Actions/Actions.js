import axios from "axios";
import { GET_PRODUCTS } from "./Actions-type";

export  function getProducts(){
    return async function(dispatch){
        try {
            const response=await axios.get('http://localhost:8083/product/listarProductos')
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