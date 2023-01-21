import { GET_USER_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS } from "./Orders.actionType"
const initialVal = {
    user:[],isLoading:false,isError:false
}

export const todoReducer = (state=initialVal,{type,payload}) =>{
    switch(type){
        case GET_USER_REQUEST:{
            return{...state,isLoading:true}
        }
        case GET_USER_SUCCESS:{
            return{...state,isLoading:false,todos:payload}
        }
        case GET_USER_ERROR:{
            return{...state,isError:true,isLoading:false}
        }
        case POST_TODO_SUCCESS:{
            return{...state,isLoading:false,todos:[...state.todos,payload]}
        }
        case POST_TODO_ERROR:{
            return{...state,isError:true,isLoading:false}
        }
        default:return state
    }
}
