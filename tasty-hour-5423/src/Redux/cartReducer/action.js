import {
  DELETE_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM__ERROR,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM__ERROR,
  ADD_CART_ITEM_REQUEST,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM__ERROR
} from "./actionTypes";
import axios from "axios";

export const addtocart =(product)=>(dispatch) => {
  dispatch({ type: ADD_CART_ITEM_REQUEST }).then(
    dispatch({ type: ADD_CART_ITEM_SUCCESS, payload: { ...product, qty: 1 } })
  );
  
}


export const deletcartitem=(id)=>(dispatch)=>{
  dispatch({ type: DELETE_CART_ITEM_REQUEST }).then(
    dispatch({ type: DELETE_CART_ITEM_SUCCESS, payload:id })
  );
}


export const updateqty=(id)=>(dispatch)=>{
  dispatch({ type:  UPDATE_CART_ITEM_REQUEST }).then(
    dispatch({ type:  UPDATE_CART_ITEM_SUCCESS, payload: id })
  );
}
