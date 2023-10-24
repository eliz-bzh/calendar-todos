import * as CONSTANTS from './ActionTypes';
import axios from 'axios';
import { setLoad } from './ActionFetchData';

export const createTodo = (todo) => (dispatch) => {
    axios.post(`http://localhost:3001/api/todos/create`, {
        todo: todo.label,
        adress: todo.adress,
        dateStart: todo.dateStart,
        dateEnd: todo.dateEnd,
        description: todo.description,
        allDay: todo.allDay,
        driver_id: todo.driver_id,
        user_id: todo.user_id,
    })
    .then(({ data }) => {
        dispatch(setMessage(data));
        dispatch(setLoad(false));
    })
}

export const setMessage = message => ({
    type: CONSTANTS.ADD_TODO,
    payload: message
});