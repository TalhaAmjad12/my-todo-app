import {
  GET_TODOLIST_REQUEST,
  GET_TODOLIST_SUCCESS,
  GET_TODOLIST_FAILURE,
} from "../../actions/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOLIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null, // Reset error on new request
      };

    case GET_TODOLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload, // Update the todo list with the fetched data
      };

    case GET_TODOLIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, // Set the error message
      };

    default:
      return state;
  }
};

export default todoReducer;
