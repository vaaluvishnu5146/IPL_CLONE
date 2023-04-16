import { createSlice } from "@reduxjs/toolkit";

const TodoReducer = createSlice({
  name: "todos",
  initialState: {
    data: [],
  },
  reducers: {
    saveTodos: (state, action) => {
      state.data.push(action.payload);
    },
  },
});
export const { saveTodos } = TodoReducer.actions;
export default TodoReducer.reducer;
