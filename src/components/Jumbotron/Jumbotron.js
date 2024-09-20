import React from "react";

export const Jumbotron = ({ title, description }) => {
  return (
    <div className="jumbotron-outline">
      <div className="jumbotron-context">
        <div className="jumbotron-header">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="jumbotron-button-grid">
            <button className="btn btn-primary">Browse Rooms</button>
            {/* <button className="btn btn-outline">Book Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
