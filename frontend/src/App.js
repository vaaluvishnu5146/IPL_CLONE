import React from "react";
import { Route, Routes } from "react-router-dom";
import TeamsJourney from "./Pages/TeamsJourney";
import "./Theme/style.css";
import AppLayout from "./Theme/AppLayout";
import PlayersJourney from "./Pages/PlayersJourney";
import CreateTeam from "./Pages/CreateTeam";
import CreateMatch from "./Pages/CreateMatch";
import MatchJourney from "./Pages/MatchJourney";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Routes>
          <Route path="matches" Component={MatchJourney} />
          <Route path="createMatch" Component={CreateMatch} />
          <Route path="teams" Component={TeamsJourney} />
          <Route path="createTeam" Component={CreateTeam} />
          <Route path="players" Component={PlayersJourney} />
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
