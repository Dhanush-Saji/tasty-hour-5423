
import { ADD_ADDRESS_REQUEST, ADD_ADDRESS_SUCCESS, ADD_ADDRESS_ERROR } from './Address.actionTypes';


const initialVal = {
    address:[],isLoading:false,isError:false
}

export const addressReducer = (state=initialVal,{type,payload}) =>{
    switch(type){
        case ADD_ADDRESS_REQUEST:{
            return{...state,isLoading:true}
        }
        case ADD_ADDRESS_SUCCESS:{
                return{...state,isLoading:false,address:[...state.address,payload]}
        }
        case ADD_ADDRESS_ERROR:{
            return{...state,isError:true,isLoading:false}
        }
        default:return state
    }
    }