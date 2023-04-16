import { configureStore } from "@reduxjs/toolkit";
import TeamsReducer from "./Reducers/Teams.reducer";
import PlayersReducer from "./Reducers/Players.reducer";
import MatchReducer from "./Reducers/Match.reducer";

export default configureStore({
  // ROOT REDUCER
  reducer: {
    teams: TeamsReducer,
    players: PlayersReducer,
    matches: MatchReducer,
  },
});
