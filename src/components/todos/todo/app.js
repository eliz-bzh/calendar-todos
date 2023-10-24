import React, { useEffect, useState } from 'react';
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import './app.css';
import AppHeader from '../app-header/app-header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, setLoad } from '../../../redux/actions/ActionFetchData';
import { createSelector } from '@reduxjs/toolkit';
import { deleteTodo } from '../../../redux/actions/ActionDeleteData';
import { createTodo } from '../../../redux/actions/ActionAddData';

const Todos = ({ dateTodos }) => {
    let maxId = 100;
    const dispatch = useDispatch();
    const { todos } = useSelector(({ fetchDataReducer })=> fetchDataReducer);
    const [ todoData,  setTodoData ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ label, setLabel ] = useState('');
    const [ filter, setFilter ] = useState('all');

    const createTodoItem=(label, id)=>{
        return{
            label,
            isImportant: false,
            isDone: false,
            index: id
        }
    };

    useEffect(()=>{
        dispatch(setLoad(true));
        dispatch(fetchTodos(dateTodos));
    }, [, dateTodos])

    useEffect(()=>{
        setTodoData([])
        todos.map(el=>addItem(el))
    }, [todos])
    
    const deleteItem=(index)=>{
        const idx = todoData.findIndex((el)=> el.index === index);
        const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
        setTodoData(newArray);
        dispatch(deleteTodo(index));
    };

    const addItem=(el)=>{
        const newItem = createTodoItem(el.todo, el.id);
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
    
    const onLabelChange=(e)=>{
        setLabel(e.target.value);
    }

    const addItemToDB =(label)=>{
        dispatch(createTodo({
            label: label,
            adress: 'Minsk',
            dateStart: new Date('October 25, 2023 15:15:30 UTC').toJSON(),
            dateEnd: new Date('October 25, 2023 15:15:30 UTC').toJSON(),
            description: "Connect server by node.js",
            allDay: false,
            driver_id: 1,
            user_id: 1
        }))
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        addItemToDB(label);
        const el = { todo:label, id: maxId++ };
        addItem(el);
        setLabel('');
    }

    const visibleItems = filtered(searchs(todoData, search), filter);
    return(
        <div className="todo-app">
            <AppHeader dateTodos={dateTodos}/>
            <div className='top-panel d-flex'>
                <SearchPanel onLabelSearch={onLabelSearch}/>
            </div>
            <TodoList todos={visibleItems} onDeleted={deleteItem} onToggleImportant={onToggleImportant} onToggleDone={onToggleDone}/>
            <form className="item-add-form d-flex" onSubmit={(e)=>onSubmit(e)}>
                <input type="text" className="form-control" onChange={(e)=>onLabelChange(e)} placeholder="What needs to be done" value={label}/>
                <button className="btn btn-outline-secondary">Add Item</button>
            </form>
        </div>
    );
}

export default Todos;