import React, { useState } from "react";
import TextField from "../Components/TextField/TextField";
import BasicDropdown from "../Components/Dropdown/Dropdown";
import { iplTeams, matchArena } from "../Configs/appData";
import { useSelector, useDispatch } from "react-redux";
import { saveMatches } from "../Redux/Reducers/Match.reducer";

export default function CreateMatch() {
  const [match, setMatch] = useState({});
  const dispatcher = useDispatch();

  function updateStorage(e) {
    if (e) {
      try {
        let matches = [];
        if (localStorage.getItem("matches")) {
          matches = [...JSON.parse(localStorage.getItem("matches"))];
        }
        dispatcher(saveMatches(match));
        matches.push(match);
        localStorage.setItem("matches", JSON.stringify(matches));
      } catch (error) {
        console.error(error);
      }
    }
  }

  function handleChange(e) {
    if (e) {
      const { id = "", value = "" } = e.target;
      const matchCopy = Object.assign({}, match);
      if (id == "teamA" || id == "teamB") {
        matchCopy[id] = iplTeams.find((d, i) => d.id == value);
      } else {
        matchCopy[id] = value;
      }
      setMatch(matchCopy);
    }
  }

  return (
    <div id="teams-page-container">
      <div id="app-page-banner" className="app-page-banner mb-5"></div>
      <div id="app-page-content-area" className="app-page-content-area">
        <div
          id="app-page-content-area-header"
          className="app-page-content-area-header mb-3"
        >
          <div className="header-start">
            <h3>Create a schedule</h3>
          </div>
          <div className="header-end"></div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <BasicDropdown
                  label="Team A"
                  placeholder="Select Team A"
                  handleChange={handleChange}
                  id="teamA"
                  options={iplTeams}
                />
              </div>
              <div className="col-6">
                <BasicDropdown
                  label="Team B"
                  placeholder="Select Team B"
                  handleChange={handleChange}
                  id="teamB"
                  options={iplTeams}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <TextField
                  type="date"
                  label="Match Date"
                  placeholder="Select Match Date"
                  id="matchDate"
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <TextField
                  type="time"
                  label="Match Time"
                  placeholder="Select Match Time"
                  id="matchTime"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <BasicDropdown
                  label="Match Arena"
                  placeholder="Select Match Arena"
                  handleChange={handleChange}
                  id="matchArena"
                  options={matchArena}
                />
              </div>
              <div className="col-6"></div>
            </div>
            <div className="d-flex flex-row-reverse">
              <button className="btn btn-warning" onClick={updateStorage}>
                Schedule Match
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
