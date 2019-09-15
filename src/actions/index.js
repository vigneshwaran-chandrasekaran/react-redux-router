// ACTIONS

export const increment = () => ({
    type: 'INCREMENT'
});

export const incrementByValue = (value) => ({
    type: 'INCREMENT_BY_VALUE',
    payload: value
});

export const decrement = () => ({
    type: 'DECREMENT'
});

export const decrementByValue = (value) => ({
    type: 'DECREMENT_BY_VALUE',
    payload: value
});

export const isLoading = () => ({
    type: 'IS_LOADING'
});

// simplified thunk action without return keyword
export const decrementByValueAsnc = value => dispatch => {
    dispatch(isLoading());
    setTimeout(() => {
        dispatch(isLoading());
        dispatch(decrementByValue(value));
    }, 3000);
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
                    // console.log({ jsonData });
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