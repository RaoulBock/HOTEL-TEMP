import React from "react";
import { APP_ICONS } from "../../context/Settings";
import LOGO from "../Images/logo.png";
import { useNavigate } from "react-router-dom";

export const Nav = ({ data }) => {
  const nav = useNavigate();
  return (
    <div className="nav-outline">
      <img src={LOGO} className="nav-icon" />
      {data && (
        <div className="nav-menu-grid">
          {data.map((e, i) => {
            return (
              <h4 onClick={e.onClick} key={i}>
                {e.name}
              </h4>
            );
          })}
        </div>
      )}
      <button className="btn btn-primary" onClick={() => nav("/rooms")}>
        Browse Rooms
      </button>
    </div>
  );
};
