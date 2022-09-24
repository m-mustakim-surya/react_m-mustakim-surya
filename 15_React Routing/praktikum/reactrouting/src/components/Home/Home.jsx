import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import datas from '../../data/datas';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
  const [titleTodo, setTitleTodo] = useState('')
  const [todos, setTodos] = useState(datas)

  const submitHandler = (e) => {
    e.preventDefault();
    if (titleTodo===''){
      alert("Masukkan input terlebih dahulu sebelum submit!")
    } else {
      setTodos(prevTodo => [
        ...prevTodo,
        {
          id : uuidv4(),
          title : titleTodo,
          completed : false
        }])
      setTitleTodo('')
    }
  }

  const completedHandler = (idFind) => {
    const completedTodos = todos.map((todo) => {
      if (todo.id === idFind.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodos(completedTodos)
  }

  const deleteHandler = (idDelete) => {
    const deleteList = todos.filter((todo) => {
      return todo.id !== idDelete.id
    })

    setTodos(deleteList)
  }

  return (
    <div className='home'>
      <Navbar/>
      <header  className='homeTitle'>
        <h1>todos</ h1>
      </header>
      <form className='inputTodos'>
        <input placeholder='Add Todo...' value={titleTodo} onChange={(e) => setTitleTodo(e.target.value)} />
        <input type="submit" onClick={submitHandler}/>
      </form>
      {todos.map(todo => {
        return (
          <div className="list">
            <ul key={todo.id}>
              <li className='list'>
                <input type='checkbox' value={todo.id} defaultChecked={todo.completed} onClick={() => completedHandler(todo)} />
                <span className={todo.completed === true ? 'list-completed' : ''}>{todo.title}</span>
                <button onClick={() => deleteHandler(todo)}>Delete</button>
                <hr></hr>
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Home;