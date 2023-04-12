import { createSlice } from "@reduxjs/toolkit";

const TeamsSlice = createSlice({
  name: "Teams",
  initialState: {
    isLoading: true,
    data: [],
  },
  reducers: {
    saveTeams: (state, action = {}) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data.push(...action.payload);
    },
  },
});

export const { saveTeams } = TeamsSlice.actions;

export default TeamsSlice.reducer;
