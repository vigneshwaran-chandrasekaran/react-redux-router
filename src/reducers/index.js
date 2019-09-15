
import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';
import loaderReducer from './isLoading';
import dataReducer from './data';

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    isLoading: loaderReducer,
    data: dataReducer
});

export default rootReducer;