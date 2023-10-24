import axios from "axios";
import { ADD_CARRITO, CLEAR_CARRITO, GET_PRODUCTS, REMOVE_ALL_CARRITO, REMOVE_ONE_CARRITO } from "./Actions-type";

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

export const addToCart=(id)=>({type:ADD_CARRITO,payload:id})

export const deleteCart=(id,all=false)=>
    all?{type:REMOVE_ALL_CARRITO,payload:id}
    :{type:REMOVE_ONE_CARRITO,payload:id}

export const clearCart =()=>({type:CLEAR_CARRITO})