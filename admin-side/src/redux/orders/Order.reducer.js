import { GET_USER_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS } from "./Orders.actionType"
const initialVal = {
    order:[],isLoading:false,isError:false
}

export const orderReducer = (state=initialVal,{type,payload}) =>{
    switch(type){
        case GET_USER_REQUEST:{
            return{...state,isLoading:true}
        }
        case GET_USER_SUCCESS:{
            return{...state,isLoading:false,order:payload}
        }
        case GET_USER_ERROR:{
            return{...state,isError:true,isLoading:false}
        }
        default:return state
    }
}
