import { axiosInstance } from "../configs/axiosInstance";

const APITodo = {
  async getAllTodo() {
    try {
      const response = await axiosInstance.get("/todos");
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async createTodos(data) {
    try {
      const response = await axiosInstance.post("/todos", data);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },

  async updateTodo(data) {
    try {
      const response = await axiosInstance.patch(`/todos/${data.id}`, {
        id: data.id,
        completed: !data.completed,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteTodosById(id) {
    try {
      const response = await axiosInstance.delete(`/todos/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default APITodo;
