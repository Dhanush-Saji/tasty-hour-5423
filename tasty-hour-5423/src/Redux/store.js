import {legacy_createStore,combineReducers,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({})


// NOTE: use this store variable to create a store.
export const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

