import * as CONSTANTS from '../actions/ActionTypes';

const initialState = {
    todos: [],
    drivers: [],
    users: {},
    loading: false
}

const ReducerFetchData = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.FETCH_TODOS:
            return { ...state, todos: action.payload };
        case CONSTANTS.FETCH_DRIVER:
            return { ...state, drivers: action.payload };
        case CONSTANTS.FETCH_USER:
            return { ...state, users: action.payload };
        default:
            return state;
    }
};

export default ReducerFetchData;