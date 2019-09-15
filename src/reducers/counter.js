// REDUCER
const counterReducer = (state = 10, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'INCREMENT_BY_VALUE':
            return state + action.payload;
        case 'DECREMENT':
            return state - 1;
        case 'DECREMENT_BY_VALUE':
            return state - action.payload;
        default:
            return state;
    }
};

export default counterReducer;