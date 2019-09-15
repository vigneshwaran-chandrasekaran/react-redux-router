import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import logger from 'redux-logger'
import rootReducer from './reducers';
import App from './App';


const logAction = store => {
    return next => {
        return action => {
            const result = next(action);
            console.log(result);
            console.log(store.getState());
            return result;
        };
    };
};


const ownLogger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};


function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);

    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);

    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

// this will work on both firefox and chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// STORE
const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(logger, thunk, logAction, ownLogger)));


// console.log({ store });


store.subscribe(() => saveToLocalStorage(store.getState()));

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
