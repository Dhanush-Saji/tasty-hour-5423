import {
  ADD_CART_ITEM_REQUEST,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM__ERROR,
  DELETE_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM__ERROR,
  GET_CART_DATA_ERROR,
  GET_CART_DATA_REQUEST,
  GET_CART_DATA_SUCCESS,
  PLUS_CART_ITEM_REQUEST,
  PLUS_CART_ITEM_SUCCESS,
  PLUS_CART_ITEM__ERROR,
  SETSUBTOTAL,
} from "./actionTypes";

let initialCart = {
  isLoading: false,
  cartData: [],
  isError: false,
  subTotal:0
};

export const CartReducer = (state = initialCart, { type, payload }) => {
  switch (type) {
    case ADD_CART_ITEM_REQUEST:{
      return{...state,isLoading:true}
  }
  case ADD_CART_ITEM_SUCCESS:{
      return{...state,isLoading:false,cartData:[...state.cartData,payload]}
  }
  case ADD_CART_ITEM__ERROR:{
      return{...state,isError:true,isLoading:false}
  }
    case GET_CART_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_CART_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cartData: payload,
      };
    }
    case GET_CART_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case DELETE_CART_ITEM_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_CART_ITEM_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case DELETE_CART_ITEM__ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case PLUS_CART_ITEM_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PLUS_CART_ITEM_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case PLUS_CART_ITEM__ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    
    default: {
      return {
        ...state,
      };
    }
  }
};