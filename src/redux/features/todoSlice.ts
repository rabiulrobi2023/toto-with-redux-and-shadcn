import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type TTodo = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
};

type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo: TTodo) => todo.id !== action.payload
      );
    },
    toggleStatus: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
        state.todos.sort(
          (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
        );
      }
    },
  },
});

export const { addTodo, removeTodo, toggleStatus } = todoSlice.actions;

export default todoSlice.reducer;
