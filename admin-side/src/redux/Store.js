import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from "./auth/Auth.reducer";
import { productReducer } from "./products/Products.reducer";
import { userReducer } from './users/Users.reducer';

const rootReducer = combineReducers({userData:userReducer,productData:productReducer,auth:authReducer})
export const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));