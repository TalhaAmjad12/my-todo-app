import { createStore } from "redux";
import combineReducers from "./root-reducers/RootReducer";

const initialState = {};

export const configureStore = () => {
  return createStore(combineReducers, initialState);
};
