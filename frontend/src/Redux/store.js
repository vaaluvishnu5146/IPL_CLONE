import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./Reducers/Todo.reducer";

export default configureStore({
  // ROOT REDUCER
  reducer: {
    // REGISTER REDUCERS HERE
    todos: TodoReducer,
  },
});
