import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from './Auth.actionType';
const initialVal = {
    isAuth:false,
    userData:[],
    isAuthLoading:false,
    isAuthError:false
}

export const authReducer = (state=initialVal,action) =>{
    const { type, payload } = action;
    switch(type){
        case USER_LOGIN_REQUEST:{
            return{...state,isAuthLoading:true}
        }
        case USER_LOGIN_SUCCESS:{
            return{...state,isAuthLoading:false,isAuth:true,userData:payload}
        }
        case USER_LOGIN_ERROR:{
            return{...state,isAuthError:true,isAuth:false,isAuthLoading:false}
        }
        default:return state
    }
}