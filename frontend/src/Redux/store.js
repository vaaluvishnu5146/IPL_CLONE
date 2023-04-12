import { configureStore } from "@reduxjs/toolkit";
import TeamsSlice from "./Reducers/Teams.reducer";

export default configureStore({
  // ROOT REDUCER
  reducer: {
    teams: TeamsSlice,
  },
});
