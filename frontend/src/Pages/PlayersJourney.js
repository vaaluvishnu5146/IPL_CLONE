import React, { useState, useEffect } from "react";
import DataTable from "../Components/Datatable/Datatable";
import axios from "axios";

/**
 *
 * @returns This component shows all the team that is playing IPL 2023
 */
export default function PlayersJourney() {
  const [teams, setTeams] = useState([]);

  async function fetchPlayerData() {
    const result = await axios.get(
      `http://${process.env.REACT_APP_HOST_NAME}${process.env.REACT_APP_GET_ALL_PLAYERS_PATH}`
    );
    const { data = {}, status = 0, statusText = "" } = result;
    if (status == 200 && statusText == "OK") {
      const { response = [] } = data;
      setTeams(response);
    }
  }

  /**
   * HOOKS THAT RUNS WHEN A COMPONENT RENDERS FOR FIRST TIME
   */
  useEffect(() => {
    fetchPlayerData();
    return () => {
      setTeams([]);
    };
  }, []);

  return (
    <div id="teams-page-container">
      <div id="app-page-banner" className="app-page-banner mb-5"></div>
      <div id="app-page-content-area" className="app-page-content-area">
        <div
          id="app-page-content-area-header"
          className="app-page-content-area-header"
        >
          <h3>Listing IPL 2023 Players</h3>
        </div>
        <DataTable
          data={teams}
          message="No Teams Found"
          keysToAvoid={[
            "_id",
            "__v",
            "teamBanner",
            "battingDetails",
            "bowlingDetails",
          ]}
        />
      </div>
    </div>
  );
}
