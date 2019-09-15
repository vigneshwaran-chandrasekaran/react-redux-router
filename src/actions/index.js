// ACTION
export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const incrementByValue = (value) => {
    return {
        type: 'INCREMENT_BY_VALUE',
        payload: value
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const decrementByValue = (value) => {
    return {
        type: 'DECREMENT_BY_VALUE',
        payload: value
    };
};

export const isLoading = () => {
    return {
        type: 'IS_LOADING',
    };
};

export const decrementByValueAsnc = (value) => {
    return dispatch => {
        console.log('start dispatch');
        dispatch(isLoading());
        setTimeout(() => {
            console.log('stop dispatch');
            dispatch(isLoading());
            dispatch(decrementByValue(value));
        }, 3000);
    };
};

export const loadAPIData = () => {
    return dispatch => {
        dispatch(isLoading());
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                .then(response => response.json())
                .then(jsonData => {
                    // Second Action Dispatch
                    dispatch({ type: 'LOADED', payload: jsonData });
                    console.log({ jsonData });
                })
                .catch(err => {
                    // Third Action Dispatch
                    // dispatch({ type: 'ERROR', payload: err });
                    console.log({ err });
                }).finally(() => {
                    dispatch(isLoading());
                });
        }, 1000);
    };

};