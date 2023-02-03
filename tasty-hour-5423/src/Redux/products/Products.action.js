
import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from './Products.actionTypes';
import axios from 'axios'

export const getproductRequest = () =>{
    return{
        type:GET_PRODUCT_REQUEST
    }
}
export const getproductSuccess = (payload) =>{
    return{
        type:GET_PRODUCT_SUCCESS,payload
    }
}
export const getproductError = () =>{
    return{
        type:GET_PRODUCT_ERROR
    }
}
export const getProductsFromDb = (params) => (dispatch) =>{
    dispatch(getproductRequest())
    axios.get("https://bewildered-duck-flannel-nightgown.cyclic.app/products",{params}).then((res)=>dispatch(getproductSuccess(res.data))).catch((err)=>dispatch(getproductError()))
    // dispatch(getproductSuccess(res.data))
    
}