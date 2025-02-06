import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo-list/TodoListSlice";

export const createStore = () => {
  return configureStore({
    reducer: {
      todo: todoSlice,
    },
  });
};

// types
export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
