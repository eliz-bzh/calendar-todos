import * as CONSTANTS from './ActionTypes';
import axios from 'axios';
import { setLoad } from './ActionFetchData';

export const deleteTodo = (id) => (dispatch) => {
    axios.delete(`http://localhost:3001/api/todos/delete/${id}`)
    .then(({ data }) => {
        dispatch(setMessage(data));
        dispatch(setLoad(false));
    })
}

export const setMessage = message => ({
    type: CONSTANTS.DELETE_TODO,
    payload: message
});