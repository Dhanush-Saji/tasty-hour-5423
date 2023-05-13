import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { authReducer } from './Auth/Auth.reducer';
import { cartReducer } from './Cart/Cart.reducer';

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducer } from './products/Products.reducer';
import { addressReducer } from './Address/Address.reducer';
import { ordersReducer } from './Orders/Orders.reducer';

const rootReducer = combineReducers({
  authReducer,cartReducer,productReducer,addressReducer,ordersReducer
});

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
