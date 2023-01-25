import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as ProductReducer } from "./Product_redux/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import {CartReducer} from "./cartReducer/reducer"
import { authReducer } from './Auth/Auth.reducer';

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  ProductReducer,
  AuthReducer,CartReducer,authReducer
});

// NOTE: use this store variable to create a store.
export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
