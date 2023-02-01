
import { ADD_ADDRESS_REQUEST, ADD_ADDRESS_SUCCESS, ADD_ADDRESS_ERROR } from './Address.actionTypes';


export const addAddressRequest = () =>{
    return{
        type:ADD_ADDRESS_REQUEST
    }
}
export const addAddressSuccess = (payload) =>{
    return{
        type:ADD_ADDRESS_SUCCESS,payload
    }
}
export const addAddressError = () =>{
    return{
        type:ADD_ADDRESS_ERROR
    }
}

export const addAddresstoRedux = (item) => (dispatch) =>{
    dispatch(addAddressRequest())
    dispatch(addAddressSuccess(item))

    
}