import { GET_USER_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS } from "./Users.actionType"
const initialVal = {
    users:[],isLoading:false,isError:false
}

export const userReducer = (state=initialVal,{type,payload}) =>{
    switch(type){
        case GET_USER_REQUEST:{
            return{...state,isLoading:true}
        }
        case GET_USER_SUCCESS:{
            return{...state,isLoading:false,users:payload}
        }
        case GET_USER_ERROR:{
            return{...state,isError:true,isLoading:false}
        }
        default:return state
    }
}
