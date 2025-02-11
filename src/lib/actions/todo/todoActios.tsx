// actions/todoActions.js
import {
  GET_TODOLIST_REQUEST,
  GET_TODOLIST_SUCCESS,
  GET_TODOLIST_FAILURE,
} from "../actionTypes";

export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOLIST_REQUEST });
  try {
    const response = await fetch(
      "https://671608ab33bc2bfe40bc1607.mockapi.io/getAll"
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
