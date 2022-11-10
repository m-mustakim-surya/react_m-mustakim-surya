import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APITodo from "../../apis/todo.api";

const initialState = {
  data: [],
  componentStatus: false,
};

export const fetchTodo = createAsyncThunk("fetchTodo/todo", async () => {
  try {
    const response = await APITodo.getAllTodo();
    console.log(response);
    return response.data.todos;
  } catch (error) {
    console.log(error.message);
  }
});

export const createTodo = createAsyncThunk("createTodo/todo", async (data) => {
  try {
    const response = await APITodo.createTodos(data);
    return response.data.insert_todos.returning[0];
  } catch (error) {
    console.log(error.message);
  }
});

export const checkedTodo = createAsyncThunk("updateTodo/todo", async (data) => {
  try {
    const response = await APITodo.updateTodo(data);
    return response;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteTodo = createAsyncThunk("delete/todos", async (id) => {
  try {
    const response = await APITodo.deleteTodosById(id);
    console.log(response);
    return response.data.delete_todos.returning[0];
  } catch (error) {
    console.log(error.message);
  }
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.componentStatus = !state.componentStatus;
        console.log(action);
      })
      .addCase(checkedTodo.fulfilled, (state, action) => {
        state.componentStatus = !state.componentStatus;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.componentStatus = !state.componentStatus;
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      });
  },
});

export default todoSlice.reducer;
