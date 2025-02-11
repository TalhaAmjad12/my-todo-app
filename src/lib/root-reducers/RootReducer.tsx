import { combineReducers } from "redux";
import todosReducer from "../reducers/todo";

export default combineReducers({
  todo: todosReducer,
});
