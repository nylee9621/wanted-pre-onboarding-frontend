import React, { useEffect, useState } from "react";
import axios from "axios";

/* component & css */
import TodoItem from "./TodoItem";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const access_token = localStorage.getItem('access_token');

    useEffect(() => {
        getTodos();
    }, []);

    const pressAddBtn = () => {
        if(!newTodo) return alert('please write your new todo');
        else createTodo();        
    }

    const createTodo = () => {
        const data = {
            todo: newTodo
        };
        const config = {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        };
        axios.post('https://www.pre-onboarding-selection-task.shop/todos', data, config)
        .then(res => {
            if(!!res?.data) setTodos([...todos, res?.data]);
            else alert('fail :(');
            setNewTodo('');
        })
        .catch(err => {
            alert('fail :(');
        });
    }

    const getTodos = () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        };
        axios.get('https://www.pre-onboarding-selection-task.shop/todos', config)
        .then(res => {
            setTodos(res?.data);
        })
        .catch(err => {
            alert('fail to get data :(');
        });
    }

    const updateTodo = todo => {
        const data = {
            todo: todo.todo,
            isCompleted: todo.isCompleted
        };
        const config = {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        };
        axios.put(`https://www.pre-onboarding-selection-task.shop/todos/${todo.id}`, data, config)
        .then(res => {
            if(!!res?.data) {
                const newTodo = res.data;
                const newTodos = todos.map(todo => {
                    if(todo.id == newTodo.id) return newTodo;
                    else return todo;
                })
                setTodos(newTodos);
            }
            else alert('fail to update :(');
        })
        .catch(err => {
            alert('fail to update :(');
        });
    }

    const deleteTodo = todo => {
        const config = {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        };
        axios.delete(`https://www.pre-onboarding-selection-task.shop/todos/${todo.id}`, config)
        .then(res => {
            const newTodos = todos.filter(el => todo.id != el.id);
            setTodos(newTodos);
        })
        .catch(err => {
            alert('fail to delete :(');
        });
    }

    return(
        <>
            {
                todos.map(todo => 
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            }
            <input
                data-testid="new-todo-input"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
            />
            <button data-testid="new-todo-add-button" onClick={() => pressAddBtn()}>추가</button>
        </>
    );
}

export default Todo;