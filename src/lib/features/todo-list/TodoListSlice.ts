import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { I_initialState, T_todoItem } from "./types";

const initialState: I_initialState = {
  todoListData: [{ id: 1, title: "the initTask", completed: "in-progress" }],
};

const todoSlice = createSlice({
  name: "todoListSlice",
  initialState,
  reducers: {
    getTodoList: (state) => {
      return state;
    },
    addNewListItem: (state, action: PayloadAction<T_todoItem>) => {
      state.todoListData.push(action.payload);
    },
    updateListItem: (state, action) => {
      const { id, ...updates } = action.payload;
  const index = state.todoListData.findIndex((todo) => todo.id === id);
  
  if (index !== -1) {
    state.todoListData[index] = {
      ...state.todoListData[index],
      ...updates,
    };
  }
    },
    deleteItem: (state, action) => {
      state.todoListData = state.todoListData.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { getTodoList, addNewListItem, updateListItem, deleteItem } =
  todoSlice.actions;
export default todoSlice.reducer;
