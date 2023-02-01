import { ADD_ORDERS_SUCCESS,ADD_ORDERS_ERROR, ADD_ORDERS_REQUEST } from "./Orders.actionType"


const initialVal = {
    orders:[],isLoading:false,isError:false
}

export const ordersReducer = (state=initialVal,{type,payload}) =>{
    switch(type){
        case ADD_ORDERS_REQUEST:{
            return{...state,isLoading:true}
        }
        case ADD_ORDERS_SUCCESS:{
                return{...state,isLoading:false,orders:[...state.orders,payload]}
        }
        case ADD_ORDERS_ERROR:{
            return{...state,isError:true,isLoading:false}
        }
        
        default:return state
    }
    }