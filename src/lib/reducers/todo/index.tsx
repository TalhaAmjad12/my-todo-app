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
} from "./actions/actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case GET_TODOLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.map((item) => ({
          ...item,
          isProcessing: false, // Adding the boolean field
        })),
      };

    case GET_TODOLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ADD_NEW_LIST_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ADD_NEW_LIST_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, { ...action.payload, isProcessing: false }],
      };

    case ADD_NEW_LIST_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case UPDATE_LIST_ITEM_REQUEST:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id
            ? { ...item, isProcessing: true } // Mark only the specific item as updating
            : item
        ),
      };

    case UPDATE_LIST_ITEM_SUCCESS:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload, isProcessing: false } // Update item & remove loading
            : item
        ),
      };

    case UPDATE_LIST_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        data: state.data.map((item) =>
          item.id === action.payload.id
            ? { ...item, isProcessing: false } // Reset processing if update fails
            : item
        ),
      };

    case DELETE_LIST_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        data: state.data.map((item) =>
          item.id === action.payload
            ? { ...item, isProcessing: true } // Set isSelected & isLoading for specific item
            : item
        ),
      };

    case DELETE_LIST_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((todo) => todo.id !== action.payload),
        error: null,
      };

    case DELETE_LIST_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: state.data.map((item) =>
          item.id === action.payload
            ? { ...item, isProcessing: false } // Reset if failed
            : item
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
