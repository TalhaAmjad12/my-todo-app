import { createStore, combineReducers } from "redux";
import todosReducer from "./reducers/todo";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  return createStore(todosReducer);
};
