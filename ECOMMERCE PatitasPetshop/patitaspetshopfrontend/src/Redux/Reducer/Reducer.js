import { GET_PRODUCTS} from "../Actions/Actions-type";


let initialState={
    allProducts:[],
    carrito:[],
    searchQuery:'',
}

function rootReducer(state=initialState,action){
    switch (action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                allProducts:action.payload
            }
            
        
       
        default:
            return state
    }
}

export default rootReducer;
