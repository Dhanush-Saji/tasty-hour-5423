
import { ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_CART_ERROR, ADD_CARTQNTY_REQUEST, ADD_CARTQNTY_SUCCESS, REMOVE_ITEM_CART_REQUEST, REMOVE_ITEM_CART_SUCCESS, EMPTY_REQUEST, EMPTY_SUCCESS } from './Cart.actionType';

const initialVal = {
    cart:[],isLoading:false,isError:false
}

export const cartReducer = (state=initialVal,{type,payload}) =>{
    console.log(payload,'payload');
    switch(type){
        case ADD_CART_REQUEST:{
            return{...state,isLoading:true}
        }
        case ADD_CART_SUCCESS:{
            let find = state.cart.findIndex((item)=>item._id == payload._id)
            if(find>=0){
                state.cart[find].quantity = state.cart[find].quantity + 1
                return{...state}
            }
            else{
                payload.quantity = 1
                return{...state,isLoading:false,cart:[...state.cart,payload]}
            }
        }
        case ADD_CART_ERROR:{
            return{...state,isError:true,isLoading:false}
        }
        case ADD_CARTQNTY_SUCCESS:{
            let newArray = [...state.cart]
            newArray = newArray.map((el) => {
                if (el._id === payload._id) {
                  return { ...el, quantity: el.quantity + 1 };
                } else {
                  return el;
                }
              });
              return { ...state, cart: [...newArray] };
        }
        case REMOVE_ITEM_CART_REQUEST:{
            return{...state,isLoading:true}
        }
        case REMOVE_ITEM_CART_SUCCESS:{
            let filterData = state.cart.filter((item)=>item._id != payload._id)
            return{...state,isLoading:false,cart:filterData}
        }
        case EMPTY_REQUEST:{
            return{...state,isLoading:true}
        }
        case EMPTY_SUCCESS:{
            return initialVal
        }
        default:return state
    }
    }