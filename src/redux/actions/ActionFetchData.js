import * as CONSTANTS from './ActionTypes';
import axios from 'axios';

export const setLoad = loader => ({
    type: CONSTANTS.SET_LOADER,
    payload: loader
});

export const fetchTodos = (currentDate) => (dispatch) => {
    axios.get(`http://localhost:3001/api/todos`)
        .then(({ data }) => {
            const filtered = data.filter(el=>new Date(el.dateStart).toLocaleString('en-GB', {dateStyle:'medium'}) === currentDate)
            dispatch(setTodos(filtered));
            dispatch(setLoad(false));
        })
}

export const setTodos = todos => ({
    type: CONSTANTS.FETCH_TODOS,
    payload: todos
});

export const fetchDrivers = () => (dispatch) => {
    axios.get(`http://localhost:3001/api/drivers`)
    .then(({ data }) => {
        dispatch(setDrivers(data));
        dispatch(setLoad(false));
    })
}

export const setDrivers = drivers => ({
    type: CONSTANTS.FETCH_DRIVER,
    payload: drivers
});

export const fetchUsers = () => (dispatch) => {
    axios.get(`http://localhost:3001/api/users`)
    .then(({ data }) => {
        dispatch(setUsers(data));
        dispatch(setLoad(false));
    })
}

export const setUsers = users => ({
    type: CONSTANTS.FETCH_USER,
    payload: users
});