import React, { useState, useEffect } from "react";
import DataTable from "../Components/Datatable/Datatable";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveTeams, setLoading } from "../Redux/Reducers/Teams.reducer";

/**
 *
 * @returns This component shows all the team that is playing IPL 2023
 */
export default function TeamsJourney() {
  const dispatcher = useDispatch();
  const { data = [], isLoading = false } = useSelector((state) => state.teams);
  const navigate = useNavigate();
  /**
   * HOOKS THAT RUNS WHEN A COMPONENT RENDERS FOR FIRST TIME
   */
  useEffect(() => {
    dispatcher(setLoading(true));
    fetch(
      `http://${process.env.REACT_APP_HOST_NAME}${process.env.REACT_APP_GET_ALL_TEAMS_PATH}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { message = "", response = [] } = data;
        if (message && response) {
          setTimeout(() => {
            dispatcher(setLoading(false));
            dispatcher(saveTeams(response));
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  return (
    <div id="teams-page-container">
      <div id="app-page-banner" className="app-page-banner mb-5"></div>
      <div id="app-page-content-area" className="app-page-content-area">
        <div
          id="app-page-content-area-header"
          className="app-page-content-area-header mb-3"
        >
          <div className="header-start">
            <h3>Listing IPL 2023 Teams</h3>
          </div>
          <div className="header-end">
            <button
              className="btn btn-warning"
              onClick={() => navigate("/createTeam")}
            >
              Add Team
            </button>
          </div>
        </div>
        <DataTable
          data={isLoading ? [] : data}
          message="No Teams Found"
          keysToAvoid={["_id", "__v", "teamBanner"]}
        />
      </div>
    </div>
  );
}
