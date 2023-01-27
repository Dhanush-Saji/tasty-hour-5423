
import { ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_CART_ERROR } from './Cart.actionType';

const initialVal = {
    cart:[],isLoading:false,isError:false
}

export const cartReducer = (state=initialVal,{type,payload}) =>{
    switch(type){
        case ADD_CART_REQUEST:{
            return{...state,isLoading:true}
        }
        case ADD_CART_SUCCESS:{
            return{...state,isLoading:false,cart:[...state.cart,payload]}
        }
        case ADD_CART_ERROR:{
            return{...state,isError:true,isLoading:false}
        }
        default:return state
    }
    }