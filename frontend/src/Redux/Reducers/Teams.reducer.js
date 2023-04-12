import { createSlice } from "@reduxjs/toolkit";

const TeamsSlice = createSlice({
  name: "Teams",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {
    saveTeams: (state, action = {}) => {
      state.data = [];
      state.data.push(...action.payload);
    },
    setLoading: (state, action = {}) => {
      state.isLoading = action.payload;
    },
  },
});

export const { saveTeams, setLoading } = TeamsSlice.actions;

export default TeamsSlice.reducer;
