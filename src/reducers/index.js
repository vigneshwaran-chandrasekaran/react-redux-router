
import { combineReducers } from 'redux';
import counter from './counter';
import isLogged from './isLogged';
import isLoading from './isLoading';
import data from './data';

const rootReducer = combineReducers({
    counter,
    isLogged,
    isLoading,
    data
});

export default rootReducer;