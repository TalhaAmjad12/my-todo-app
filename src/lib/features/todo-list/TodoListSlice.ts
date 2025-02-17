import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { I_initialState, T_todoItem } from "./types";
import { fetchData, addNewFn, updatefn, deletefn } from "./actions";

const initialState: I_initialState = {
  data: [{ id: 1, title: "the initTask", completed: "in-progress" }],
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todoListSlice",
  initialState,
  reducers: {
    getTodoList: (state) => {
      return state;
    },
    addNewListItem: (state, action: PayloadAction<T_todoItem>) => {
      state.data.push(action.payload);
    },
    updateListItem: (state, action) => {
      const { id, ...updates } = action.payload;
      const index = state.data.findIndex((todo) => todo.id === id);

      if (index !== -1) {
        state.data[index] = {
          ...state.data[index],
          ...updates,
        };
      }
    },
    deleteItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // add
      .addCase(addNewFn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNewFn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(addNewFn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // edit
      .addCase(updatefn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatefn.fulfilled, (state, action) => {
        console.log(action.payload, "the payload I want to see");
        const { id, ...updates } = action.payload;
        const index = state.data.findIndex((todo) => todo.id === id);

        if (index !== -1) {
          state.data[index] = {
            ...state.data[index],
            ...updates,
          };
        }

        state.isLoading = false;
      })
      .addCase(updatefn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // delete
      .addCase(deletefn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deletefn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((todo) => todo.id !== action.payload.id);
      })
      .addCase(deletefn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { getTodoList, addNewListItem, updateListItem, deleteItem } =
  todoSlice.actions;
export default todoSlice.reducer;
