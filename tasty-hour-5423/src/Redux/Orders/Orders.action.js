
import { ADD_ORDERS_REQUEST, ADD_ORDERS_SUCCESS, ADD_ORDERS_ERROR } from './Orders.actionType';

export const addtoOrdersRequest = () =>{
    return{
        type:ADD_ORDERS_REQUEST
    }
}
export const addtoOrdersSuccess = (payload) =>{
    return{
        type:ADD_ORDERS_SUCCESS,payload
    }
}
export const addtoOrdersError = () =>{
    return{
        type:ADD_ORDERS_ERROR
    }
}


export const addProductToOrders = (item) => (dispatch) =>{
    dispatch(addtoOrdersRequest())
    dispatch(addtoOrdersSuccess(item))

    
}