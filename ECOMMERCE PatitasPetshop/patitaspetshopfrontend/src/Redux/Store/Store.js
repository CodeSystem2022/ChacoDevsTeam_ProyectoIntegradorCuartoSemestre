import {createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/Reducer.js';


export const store=createStore(
    rootReducer,
    applyMiddleware(thunk)
)
