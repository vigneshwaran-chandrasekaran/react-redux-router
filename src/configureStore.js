import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import throttle from 'lodash/throttle';

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
        persistedState, // initial store values (it will override the rootReducer state values)
        composeEnhancers(applyMiddleware(logger, thunk, logAction, ownLogger)));


    store.subscribe(throttle(() => {
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