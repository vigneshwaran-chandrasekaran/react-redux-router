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