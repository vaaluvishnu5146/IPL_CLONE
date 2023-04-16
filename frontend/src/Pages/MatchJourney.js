import React from "react";
import { useNavigate } from "react-router-dom";
import ListView from "../Components/ListView/ListView";

export default function MatchJourney() {
  const navigate = useNavigate();

  const matches = JSON.parse(localStorage.getItem("matches"));

  return (
    <div id="teams-page-container">
      <div id="app-page-banner" className="app-page-banner mb-5"></div>
      <div id="app-page-content-area" className="app-page-content-area">
        <div
          id="app-page-content-area-header"
          className="app-page-content-area-header mb-3"
        >
          <div className="header-start">
            <h3>Listing IPL 2023 Match Schedule</h3>
          </div>
          <div className="header-end">
            <button
              className="btn btn-warning"
              onClick={() => navigate("/createMatch")}
            >
              Add Match
            </button>
          </div>
        </div>
        <ListView data={matches} />
      </div>
    </div>
  );
}
