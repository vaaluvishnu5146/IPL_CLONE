import React from "react";
import { Link } from "react-router-dom";
import imagesMock from "../Configs/images.mock";

export default function AppLayout({ children }) {
  return (
    <div className="app-layout-container" id="app-layout-container">
      <div className="app-layout-side-bar">
        <div className="branding">
          <img src={imagesMock.IPL_LOGO} alt="ipl-logo" />
        </div>
        <div className="link-container">
          <Link className="sidebar-link" to={"/teams"}>
            Teams
          </Link>
          <Link className="sidebar-link" to={"/players"}>
            Players
          </Link>
        </div>
        <div className="advertisement"></div>
      </div>
      <div className="app-layout-content-area">{children}</div>
    </div>
  );
}
