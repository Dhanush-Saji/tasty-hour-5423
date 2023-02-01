import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as ProductReducer } from "./Product_redux/reducer";
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

// NOTE: use this store variable to create a store.
export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
