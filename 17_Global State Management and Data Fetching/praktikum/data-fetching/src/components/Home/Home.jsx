import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../../store/features/todoSlice";
import Navbar from "../Navbar/Navbar";
import "./Home.css"

const Home = ({ deleteTodo }) => {
  const dispatch = useDispatch();
  const listOfTodo = useSelector((state) => state.todo.data);
  const componentStatus = useSelector((state) => state.todo.componentStatus);
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch, componentStatus]);
  console.log(listOfTodo);
  return (
    <div className="home">
      <Navbar />
      <header  className='homeTitle'>
        <h1>todos</ h1>
      </header>
      <TodoInput />
      <div className="todos">
        <ul>
          {listOfTodo?.map((todo) => (
            <TodoList key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
