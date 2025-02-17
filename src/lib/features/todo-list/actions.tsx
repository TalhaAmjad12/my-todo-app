import { createAsyncThunk } from "@reduxjs/toolkit";
type ApiResponse = {
  id: number;
  name: string;
  description: string;
};

// Create a thunk to fetch data from an API
export const fetchData = createAsyncThunk<ApiResponse[], void>(
  "data/fetchData",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://671608ab33bc2bfe40bc1607.mockapi.io/todolist"
      ); // Adjust URL as needed
      console.log(response, "response.data");
      return response.json();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch data"
      );
    }
  }
);

// add new data in the list

export const addNewFn = createAsyncThunk<ApiResponse[], void>(
  "data/addNewFn",
  async (listItem, thunkAPI) => {
    try {
      const response = await fetch(
        `https://671608ab33bc2bfe40bc1607.mockapi.io/todolist`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(listItem),
        }
      );
      console.log(response, "response.data");
      const data = await response.json();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to ADD data"
      );
    }
  }
);

// edit by id

export const updatefn = createAsyncThunk<ApiResponse[], void>(
  "data/updateItem",
  async (listItem, thunkAPI) => {
    try {
      const response = await fetch(
        `https://671608ab33bc2bfe40bc1607.mockapi.io/todolist/${listItem.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(listItem),
        }
      );
      console.log(response, "response.data");
      const data = await response.json();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch data"
      );
    }
  }
);

// delete
export const deletefn = createAsyncThunk<ApiResponse[], void>(
  "data/deleteListItem",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(
        `https://671608ab33bc2bfe40bc1607.mockapi.io/todolist/${id}`,
        { method: "Delete" }
      );
      console.log(response, "response.data");
      return response.json();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch data"
      );
    }
  }
);
