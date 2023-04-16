import React from "react";

export default function ListView({ data = [] }) {
  return (
    <div className="card" id="list-view">
      <div className="card-body">
        <div class="list-group">
          {data.map((d, i) => (
            <a
              key={`${i}`}
              href="#"
              class="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="row d-flex">
                <div className="col-6">
                  <div className="d-flex flex-row align-items-center  justify-content-between">
                    <h4>{d.teamA.label}</h4>
                    <div className="team-logo-circle">
                      <img src={d.teamA.logo} />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex flex-row-reverse align-items-center justify-content-between">
                    <h4>{d.teamB.label}</h4>
                    <div className="team-logo-circle">
                      <img src={d.teamB.logo} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
