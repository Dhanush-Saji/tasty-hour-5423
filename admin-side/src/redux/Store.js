import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({})
export const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));