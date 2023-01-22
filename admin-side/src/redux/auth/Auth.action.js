import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from './Auth.actionType';

export const loginRequest = () =>{
    return{
        type:USER_LOGIN_REQUEST
    }
}
export const loginSuccess = (token) =>{
    return{
        type:USER_LOGIN_SUCCESS,
        payload:token
    }
}
export const loginError = () =>{
    return{
        type:USER_LOGIN_ERROR
    }
}