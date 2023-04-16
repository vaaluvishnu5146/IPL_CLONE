import { createSlice } from "@reduxjs/toolkit";

const MatchReducer = createSlice({
  name: "Matches",
  initialState: {
    data: [],
  },
  reducers: {
    saveMatches: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { saveMatches } = MatchReducer.actions;
export default MatchReducer.reducer;
