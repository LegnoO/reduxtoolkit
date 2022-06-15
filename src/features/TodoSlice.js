import { createSlice } from "@reduxjs/toolkit";

export const Todo = createSlice({
  name: "todo",
  initialState: {
    todoList: [
      { id: 1, content: "Hit the gym" },
      { id: 2, content: "Meet George" },
      { id: 3, content: "Play game" },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodoList = {
        id: state.todoList.length + 1,
        content: action.payload.task,
      };
      state.todoList.push(newTodoList);
    },

    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todoList) => todoList.id !== action.payload.id
      );
    },
  },
});

export const { addTodo, removeTodo } = Todo.actions;
export const TodoReducer = Todo.reducer;
