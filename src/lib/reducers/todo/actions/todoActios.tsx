// actions/todoActions.js
import {
  GET_TODOLIST_REQUEST,
  GET_TODOLIST_SUCCESS,
  GET_TODOLIST_FAILURE,
  ADD_NEW_LIST_ITEM_REQUEST,
  ADD_NEW_LIST_ITEM_SUCCESS,
  ADD_NEW_LIST_ITEM_FAILURE,
  UPDATE_LIST_ITEM_REQUEST,
  UPDATE_LIST_ITEM_SUCCESS,
  UPDATE_LIST_ITEM_FAILURE,
  DELETE_LIST_ITEM_REQUEST,
  DELETE_LIST_ITEM_SUCCESS,
  DELETE_LIST_ITEM_FAILURE,
} from "./actionTypes";

export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOLIST_REQUEST });
  try {
    const response = await fetch(
      "https://671608ab33bc2bfe40bc1607.mockapi.io/todolist"
    );
    const data = await response.json();
    dispatch({ type: GET_TODOLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TODOLIST_FAILURE,
      payload: error.message,
    });
  }
};

export const addNewListItem = (newTodo: {}) => async (dispatch) => {
  dispatch({ type: ADD_NEW_LIST_ITEM_REQUEST });
  try {
    const response = await fetch(
      "https://671608ab33bc2bfe40bc1607.mockapi.io/todolist",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      }
    );

    const data = await response.json();
    dispatch({ type: ADD_NEW_LIST_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_NEW_LIST_ITEM_FAILURE,
      payload: error.message,
    });
  }
};

export const updateListItemById = (listItem) => async (dispatch) => {
  dispatch({ type: UPDATE_LIST_ITEM_REQUEST, payload: { id: listItem.id } });

  try {
    const response = await fetch(
      `https://671608ab33bc2bfe40bc1607.mockapi.io/todolist/${listItem.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(listItem), // Send the updated item data
      }
    );

    if (response.ok) {
      const updatedItem = await response.json(); // Ensure updated data is returned
      dispatch({ type: UPDATE_LIST_ITEM_SUCCESS, payload: updatedItem });
    } else {
      throw new Error("Failed to update record.");
    }
  } catch (error) {
    dispatch({
      type: UPDATE_LIST_ITEM_FAILURE,
      payload: { id: listItem.id, error: error.message },
    });
  }
};

export const deleteListItem = (id: number) => async (dispatch) => {
  dispatch({ type: DELETE_LIST_ITEM_REQUEST, payload: id });
  try {
    const response = await fetch(
      `https://671608ab33bc2bfe40bc1607.mockapi.io/todolist/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      dispatch({ type: DELETE_LIST_ITEM_SUCCESS, payload: id });
    } else {
      throw new Error("Failed to delete record.");
    }
  } catch (error) {
    dispatch({
      type: DELETE_LIST_ITEM_FAILURE,
      payload: id,
    });
  }
};
