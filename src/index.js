import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import logger from 'redux-logger'
import rootReducer from './reducers';
import App from './App';

// STORE
const store = createStore(
    rootReducer,
    compose(applyMiddleware(logger, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


console.log({ store });

/**

// ACTION
const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

// REDUCER
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }

};

// Display
store.subscribe(() => {
    console.log(store.getState());
});

// DISPATCH
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch({ type: 'INCREMENT' });
*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
