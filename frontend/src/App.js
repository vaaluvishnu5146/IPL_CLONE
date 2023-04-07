import React from "react";
import { Route, Routes } from "react-router-dom";
import TeamsJourney from "./Pages/TeamsJourney";
import "./Theme/style.css";
import AppLayout from "./Theme/AppLayout";
import PlayersJourney from "./Pages/PlayersJourney";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Routes>
          <Route path="teams" Component={TeamsJourney} />
          <Route path="players" Component={PlayersJourney} />
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
