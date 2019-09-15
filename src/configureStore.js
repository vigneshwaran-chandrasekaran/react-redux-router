import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';

const configureStore = () => {
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

    // read already saved state data from local storage
    const persistedState = loadFromLocalStorage();

    // this will work on both firefox and chrome
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const middlewares = [thunk]; // all environment middleware
    if (process.env.NODE_ENV !== 'production') {
        // not production mode middlewares
        middlewares.push(logger, logAction, ownLogger);
    }

    // STORE
    const store = createStore(
        rootReducer,
        persistedState, // initial store values (it will override the rootReducer state values)
        composeEnhancers(
            applyMiddleware(...middlewares) // middleware for logging, thunk...
        )
    );

    // to find which mode is running
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development') {
        console.log('development server is running...');
    }

    store.subscribe(throttle(() => {
        // write current state data to local storage
        saveToLocalStorage(store.getState());
    }, 2000));

    return store;
};

export default configureStore;

/**
 * sample redux concepts
 *
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