import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./Home.css"

const Home = ({ onDelete, checked }) => {
  const todos = useSelector((state) => state.todo);
  return (
    <div className="home">
      <Navbar />
      <header  className='homeTitle'>
        <h1>todos</ h1>
      </header>
      <TodoInput />
      <div className="todos">
        <ul>
          {todos.map((todo) => (
            <TodoList
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              checked={checked}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
