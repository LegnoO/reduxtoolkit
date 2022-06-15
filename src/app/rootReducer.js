import { combineReducers } from "@reduxjs/toolkit";
import { changeReducer } from "../features/ChangeSlice";
import { TodoReducer } from "../features/TodoSlice";

const rootReducer = combineReducers({
  change: changeReducer,
  todo: TodoReducer,
});

export default rootReducer;
