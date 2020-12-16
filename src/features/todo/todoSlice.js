import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeItem: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateItem: (state, action) => {
      const filteredTodos= state.todos.filter(todo=>todo.id !== action.payload.id);
      state.todos = [...filteredTodos,action.payload];
    },
    
  },
});

export const { addItem, removeItem,updateItem } = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTodos = state => state.todo.todos;
export default todoSlice.reducer;
