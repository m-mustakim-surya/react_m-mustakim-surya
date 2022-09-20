import React from "react";
import { useState } from "react";
import { data } from "./Data.jsx";
import "./TodoApp.css";

const TodoApp = () => {
    const Todo = ({ todo, onDelete, checked }) => {
        const [isChecked] = useState(true);
    
        return (
            <div className="todo">
                {
                    <li className={todo.completed ? "done" : "undone"}>
                    <input
                        type="checkbox"
                        onClick={() => checked(todo)}
                        defaultChecked={todo.completed ? isChecked : !isChecked}
                    />
                    {todo.title}
                    </li>
                }
                <button onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
        );
    };
    
    const TodoList = ({todos, onDelete, checked}) => {
        return (
            <div className="todos">
                <ul>
                    {todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} onDelete={onDelete} checked={checked}/>
                    ))}
                </ul>
            </div>
        );
    };
    
    const TodoInput = ({ addTodo }) => {
        const [inputTodo, setInputTodo] = useState("");
    
        const todoChange = (a) => {
        setInputTodo(a.target.value);
        };
    
        const todoSubmit = (a) => {
            a.preventDefault();
            let newTodos = inputTodo ? addTodo(inputTodo) : alert("Isi input terlebih dahulu sebelum anda submit.");
            setInputTodo("");
            return newTodos;
        };
    
        return (
            <div className="todoForm">
                <form>
                    <input
                        type="text"
                        placeholder="Add todo..."
                        onChange={todoChange}
                        value={inputTodo}
                    />
                    <input type="submit" className="submitButton" onClick={todoSubmit} />
                </form>
            </div>
        );
    };    

    const [todos, setTodos] = useState([...data]);

    const todoAdd = (userInput) => {
        let newTodo = [...todos];
        newTodo = [
            ...newTodo,
            {
                id: Math.round(Math.random() * 1000),
                title: userInput,
                completed: false,
            },
        ];
        setTodos(newTodo);
    };

    const todoDelete = (id) => {
        const deletedTodo = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(deletedTodo);
    };

    const todoCheckbox = (todo) => {
        let checkedTodo = todos.map((data) => (data.id === todo.id ? { ...data, completed: !data.completed } : data));
        setTodos(checkedTodo);
    };

    return (
        <div className="todoList">
            <h1>todos</h1>
            <TodoInput addTodo={todoAdd} />
            <TodoList todos={todos} onDelete={todoDelete} checked={todoCheckbox}  />
        </div>
    );
};

export default TodoApp;