import { createSlice } from "@reduxjs/toolkit";

const PlayersSlice = createSlice({
  name: "Players",
  initialState: {
    isLoading: true,
    data: [],
  },
  reducers: {
    savePlayer: (state, action = {}) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = [];
      state.data.push(...action.payload);
    },
  },
});

export const { savePlayer } = PlayersSlice.actions;

export default PlayersSlice.reducer;
