
import { ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_CART_ERROR } from './Cart.actionType';

export const addtocartRequest = () =>{
    return{
        type:ADD_CART_REQUEST
    }
}
export const addtocartSuccess = (payload) =>{
    return{
        type:ADD_CART_SUCCESS,payload
    }
}
export const addtocartError = () =>{
    return{
        type:ADD_CART_ERROR
    }
}