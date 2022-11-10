import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../store/features/todoSlice";

function TodoInput() {
  const [inputTodo, setInputTodo] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("todo");
    inputTodo
      ? dispatch(createTodo({ title }))
      : alert("Masukkan data terlebih dahulu");
    setInputTodo("");
  };

  return (
    <div className="todoInput">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          onChange={handleChange}
          value={inputTodo}
          name="todo"
        />
        <input type="submit" className="submitButton" />
      </form>
    </div>
  );
}

export default TodoInput;
