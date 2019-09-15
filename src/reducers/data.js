// REDUCER

const initialUserState = {
    arr: [],
    users: [],
    books: [],
    country: []
};

const dataReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case 'LOADED':
            console.log('redux jsonData', action.payload);
            return { ...state, arr: action.payload };
        default:
            return state;
    }
};

export default dataReducer;