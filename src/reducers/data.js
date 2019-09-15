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
            return {
                ...state,
                arr: action.payload
            };
        default:
            return state;
    }
};

export default dataReducer;