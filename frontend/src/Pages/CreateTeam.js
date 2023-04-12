import React, { useState } from "react";
import TextField from "../Components/TextField/TextField";

export default function CreateTeam() {
  const [team, setTeam] = useState({});

  function handleInput(e) {
    const { id, value, type } = e.target;
    const teamCopy = {
      ...team,
    };
    teamCopy[id] = value;
    setTeam(teamCopy);
  }

  async function handleCreateTeam(e) {
    if (e) {
      const response = await fetch(
        `http://${process.env.REACT_APP_HOST_NAME}${process.env.REACT_APP_CREATE_TEAM_PATH}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(team),
        }
      );
      if (response) {
        const { message = "", data = {} } = response;
        console.log(message);
      }
    }
  }

  return (
    <div>
      <TextField
        id="teamName"
        placeholder="Enter Team Name"
        label="Team Name"
        value=""
        onChange={handleInput}
        type="text"
      />
      <TextField
        id="teamShortName"
        placeholder="Enter Team Short Name"
        label="Team Short Name"
        value=""
        onChange={handleInput}
        type="text"
      />
      <TextField
        id="colorCode"
        placeholder="Select Team Color Code"
        label="Team Color Code"
        value=""
        onChange={handleInput}
        type="color"
      />
      <TextField
        id="totalPlayers"
        placeholder="Enter Total Players Team Color Code"
        label="Total Players"
        value=""
        onChange={handleInput}
        type="number"
      />
      <TextField
        id="totalSubstitutes"
        placeholder="Enter Total Substitutes"
        label="Total Substitutes"
        value=""
        onChange={handleInput}
        type="number"
      />
      <TextField
        id="totalHelpers"
        placeholder="Enter Total Players Team Color Code"
        label="Total Helpers"
        value=""
        onChange={handleInput}
        type="number"
      />
      <TextField
        id="state"
        placeholder="Enter State Playing for"
        label="Team State"
        value=""
        onChange={handleInput}
        type="text"
      />
      <TextField
        id="teamOwner"
        placeholder="Enter Team Owner"
        label="Team Owner Name"
        value=""
        onChange={handleInput}
        type="text"
      />
      <TextField
        id="teamCaptain"
        placeholder="Enter Team Captain"
        label="Team Captain Name"
        value=""
        onChange={handleInput}
        type="text"
      />
      <TextField
        id="teamCoach"
        placeholder="Enter Team Coach"
        label="Team Coach Name"
        value=""
        onChange={handleInput}
        type="text"
      />
      <TextField
        id="teamCup"
        placeholder="Enter Total Team Cups Won"
        label="Team Cups"
        value=""
        onChange={handleInput}
        type="text"
      />
      <input
        type="date"
        id="date"
        onChange={handleInput}
        min={new Date().toISOString().split("T")[0]}
      />
      <button className="btn btn-danger">Reset Form</button>
      <button className="btn btn-primary" onClick={handleCreateTeam}>
        Create Team
      </button>
    </div>
  );
}
