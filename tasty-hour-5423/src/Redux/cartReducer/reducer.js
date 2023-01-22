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


let initialCart = {
  isLoading: false,
  cartData: [{
    "_id": "63c7b81df737416ab210a1cd",
    "name": "Nutella Banana Waffle-Single",
    "category": "Kitchen Ware",
    "images": "https://cdn.plotch.io/image/upload/w_301,h_301/C/V/PLOOmAiPML1673482955_be067219bbee2d348e8d33ec68c65f62baa76229bcfccba8b86ee4356269b404.jpg",
    "returnable": true,
    "cancellable": true,
    "time_to_ship": 9,
    "return_window": 6,
    "description": "ex magna laboris Lorem exercitation do dolore nostrud officia pariatur",
    "price": "₹ 140"
  },
  {
    "_id": "63c7b81d68870aab5f3e4575",
    "name": "Dry Fruit Waffle-Double",
    "category": "Kitchen Ware",
    "images": "https://cdn.plotch.io/image/upload/w_301,h_301/C/V/PLOS0xxDGL1673482951_be067219bbee2d348e8d33ec68c65f62baa76229bcfccba8b86ee4356269b404.jpg",
    "returnable": false,
    "cancellable": true,
    "time_to_ship": 2,
    "return_window": 0,
    "description": "incididunt nulla laboris Lorem sunt cillum excepteur minim do sint",
    "price": "₹ 240"
  }],
  isError: false,
  allcartTotal:0
};

export const CartReducer = (state = initialCart, { type, payload }) => {
  switch (type) {
    case ADD_CART_ITEM_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_CART_ITEM_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cartData:[...state.cartData,payload]
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
        cartData:state.cartData.filter((el)=>el._id!==payload)
      };
    }
    case DELETE_CART_ITEM__ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case  UPDATE_CART_ITEM_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case  UPDATE_CART_ITEM_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cartData:state.cartData.map(obj=>obj._id===payload?{...obj,qty:obj.qty+1}:obj)
      };
    }
    
    
    default: {
      return {
        ...state,
      };
    }
  }
};
