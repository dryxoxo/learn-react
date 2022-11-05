import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todoReducer from "../reducer/todoReducer";

const allReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
