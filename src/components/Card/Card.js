import React from "react";

export const Card = ({ header, children }) => {
  return (
    <div className="card-outline">
      {header && (
        <div className="card-header-outline">
          <h3>{header}</h3>
        </div>
      )}
      <div className="card-context-outline">{children}</div>
    </div>
  );
};
