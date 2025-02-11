import { combineReducers } from "redux";
import todosReducer from "../reducers/todo";

const rootReducer = combineReducers({
  todo: todosReducer,
});

export default rootReducer;
