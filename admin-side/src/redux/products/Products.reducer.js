import { GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS,GET_PRODUCT_ERROR, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_REQUEST } from "./Products.actionTypes"


const initialVal = {
    products:[],isLoading:false,isError:false
}

export const productReducer = (state=initialVal,{type,payload}) =>{
    switch(type){
        case GET_PRODUCT_REQUEST:{
            return{...state,isLoading:true}
        }
        case GET_PRODUCT_SUCCESS:{
            return{...state,isLoading:false,products:payload}
        }
        case GET_PRODUCT_ERROR:{
            return{...state,isError:true,isLoading:false}
        }
        case DELETE_PRODUCT_REQUEST:{
            return{...state,isLoading:true}
        }
        case DELETE_PRODUCT_SUCCESS:{
            return{...state,isLoading:false,products:[...state.products,payload]}
        }
        case DELETE_PRODUCT_ERROR:{
            return{...state,isError:true,isLoading:false}
        }
        case POST_PRODUCT_REQUEST:{
            return{...state,isLoading:true}
        }
        case POST_PRODUCT_SUCCESS:{
            return{...state,isLoading:false,products:[...state.products,payload]}
        }
        case POST_PRODUCT_ERROR:{
            return{...state,isError:true,isLoading:false}
        }
        default:return state
    }
}
