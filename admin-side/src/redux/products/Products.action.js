
import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from './Products.actionTypes';
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
/////////////////////////////////
export const postproductRequest = () =>{
    return{
        type:POST_PRODUCT_REQUEST
    }
}
export const postproductSuccess = (payload) =>{
    return{
        type:POST_PRODUCT_SUCCESS,payload
    }
}
export const postproductError = () =>{
    return{
        type:POST_PRODUCT_ERROR
    }
}
////////////////////////////////////

export const addProduct = (item) => (dispatch) =>{
    const payload = item
    // console.log(payload);
    // try {
        dispatch(postproductRequest())
        axios.post("http://localhost:8080/products",payload).then((res)=>dispatch(postproductSuccess(res.data))).catch((err)=>dispatch(postproductError()))
        
    // } catch (error) {
    //     dispatch(postproductError())
    // }
    // .then((res)=>dispatch(postproductSuccess(res.data))).catch((err)=>dispatch(postproductError()))
    
}