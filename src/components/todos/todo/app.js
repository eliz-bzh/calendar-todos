import React, { useEffect, useState } from 'react';
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import './app.css';
import AppHeader from '../app-header/app-header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, setLoad } from '../../../redux/actions/ActionFetchData';
import { createSelector } from '@reduxjs/toolkit';

const Todos = ({ dateTodos }) => {
    let maxId = 100;
    console.log(this);
    const dispatch = useDispatch();
    const { todos } = useSelector(({ fetchDataReducer })=> fetchDataReducer);
    const [ todoData,  setTodoData ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ filter, setFilter ] = useState('all');

    const createTodoItem=(label)=>{
        return{
            label,
            isImportant: false,
            isDone: false,
            index: maxId++
        }
    };

    useEffect(()=>{
        dispatch(setLoad(true));
        dispatch(fetchTodos(dateTodos));
    }, [, dateTodos])

    useEffect(()=>{
        setTodoData([])
        todos.map(el=>addItem(el.todo))
    }, [todos])
    
    const deleteItem=(index)=>{
        const idx = todoData.findIndex((el)=> el.index === index);
        const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
        setTodoData(newArray);
    };

    const addItem=(text)=>{
        const newItem = createTodoItem(text);
        setTodoData(prevState => [...prevState, newItem]);
    };

    const toggleProperty=(arr, index, propName)=>{
        const idx = arr.findIndex((el)=> el.index === index);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    };

    const onToggleImportant=(index)=>{
        setTodoData(toggleProperty(todoData, index, 'isImportant'));
    };

    const onToggleDone=(index)=>{
        setTodoData(toggleProperty(todoData, index, 'isDone'));
    };

    const onLabelSearch=(search)=>{
        setSearch(search);
    };

    const searchs=(items, search)=>{
        if(search.length === 0){
            return items;
        }
        return items.filter((item) =>{
            return item.label.toUpperCase().indexOf(search.toUpperCase()) > -1;
        })
    };

    const filtered=(items, filter)=>{
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return  items.filter((item)=>!item.isDone);
            case 'done':
                return items.filter((item)=>item.isDone);
            default:
                return items;
        }
    }

    const onFilterChange=(filter)=>{
        setFilter(filter);
    };

    const visibleItems = filtered(searchs(todoData, search), filter);
    return(
        <div className="todo-app">
            <AppHeader dateTodos={dateTodos}/>
            <div className='top-panel d-flex'>
                <SearchPanel onLabelSearch={onLabelSearch}/>
            </div>
            <TodoList todos={visibleItems} onDeleted={deleteItem} onToggleImportant={onToggleImportant} onToggleDone={onToggleDone}/>
        </div>
    );
}

export default Todos;