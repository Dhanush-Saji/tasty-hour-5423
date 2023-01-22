import { useDispatch } from 'react-redux';
import axios from 'axios'
import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR } from './Orders.actionType';

export const getuserRequest = () =>{
    return{
        type:GET_USER_REQUEST
    }
}
export const getuserSuccess = (payload) =>{
    return{
        type:GET_USER_SUCCESS,payload
    }
}
export const getuserError = () =>{
    return{
        type:GET_USER_ERROR
    }
}