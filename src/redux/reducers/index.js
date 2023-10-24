import { combineReducers } from 'redux';
import fetchDataReducer from './ReducerFetchData';

const rootReducer = combineReducers({
    fetchDataReducer
});

export default rootReducer;