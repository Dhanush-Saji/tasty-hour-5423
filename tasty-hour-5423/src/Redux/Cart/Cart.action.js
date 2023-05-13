
import { ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_CART_ERROR, ADD_CARTQNTY_REQUEST, ADD_CARTQNTY_SUCCESS, ADD_CARTQNTY_ERROR, REMOVE_ITEM_CART_REQUEST, REMOVE_ITEM_CART_SUCCESS, REMOVE_ITEM_CART_ERROR, EMPTY_REQUEST, EMPTY_SUCCESS } from './Cart.actionType';

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
export const addtocartqntySuccess = (payload) =>{
    return{
        type:ADD_CARTQNTY_SUCCESS,payload
    }
}
export const removeItemCartRequest = () =>{
    return{
        type:REMOVE_ITEM_CART_REQUEST
    }
}
export const removeItemCartSuccess = (payload) =>{
    return{
        type:REMOVE_ITEM_CART_SUCCESS,payload
    }
}

export const emptyCartRequest = () =>{
    return{
        type:EMPTY_REQUEST
    }
}
export const emptyCartSuccess = () =>{
    return{
        type:EMPTY_SUCCESS
    }
}

export const emptyCart = () => (dispatch) =>{
    dispatch(emptyCartRequest())
    dispatch(emptyCartSuccess())

    
}
export const addProductToCart = (item) => (dispatch) =>{
    dispatch(addtocartRequest())
    dispatch(addtocartSuccess(item))

    
}
export const addProductQntyCart = (item) => (dispatch) =>{
    dispatch(addtocartqntySuccess(item))

    
}

export const removeItemFromCart = (item) => (dispatch) =>{
    dispatch(removeItemCartRequest())
    dispatch(removeItemCartSuccess(item))

    
}