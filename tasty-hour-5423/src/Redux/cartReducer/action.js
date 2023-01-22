import {
  DELETE_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM__ERROR,
  GET_CART_DATA_ERROR,
  GET_CART_DATA_REQUEST,
  GET_CART_DATA_SUCCESS,
  PLUS_CART_ITEM_REQUEST,
  PLUS_CART_ITEM_SUCCESS,
  PLUS_CART_ITEM__ERROR,
  SETSUBTOTAL,ADD_CART_ITEM_REQUEST,ADD_CART_ITEM_SUCCESS,ADD_CART_ITEM__ERROR
} from "./actionTypes";
import axios from "axios";

export const getCartDataRequest = () => {
  return {
    type: GET_CART_DATA_REQUEST,
  };
};

export const getCartDataSuccess = (payload) => {
  return {
    type: GET_CART_DATA_SUCCESS,
    payload: payload,
  };
};

export const getCartDataError = () => {
  return {
    type: GET_CART_DATA_ERROR,
  };
};

//! GET-CART-DATA 👇🚩

export const getdata = () => (dispatch) => {
  dispatch(getCartDataRequest());
  return axios
    .get("https://finalcart.onrender.com/cart")
    .then((res) => {
      dispatch(getCartDataSuccess(res.data));
    })
    .catch((e) => {
      dispatch(getCartDataError());
    });
};

//! DELETE-CART-ITEM 👇🚩

export const Deletdata = (id) => (dispatch) => {
  dispatch({ type: DELETE_CART_ITEM_REQUEST });
  return axios
    .delete(`https://finalcart.onrender.com/cart/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_CART_ITEM_SUCCESS });
    })
    .catch((e) => {
      dispatch({ type: DELETE_CART_ITEM__ERROR });
    });
};

//! Pluse-CART-ITEM 👇🚩




export const addTocart=(product)=>(dispatch)=>{
  dispatch({ type: ADD_CART_ITEM_REQUEST });
  return axios
    .post(`https://finalcart.onrender.com/cart`,product)
    .then((res) => {
      dispatch({ type: ADD_CART_ITEM_SUCCESS });
    })
    .catch((e) => {
      dispatch({ type: ADD_CART_ITEM__ERROR });
    });
}
