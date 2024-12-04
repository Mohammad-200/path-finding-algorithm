import React from "react";
import "./mapNodes.css";

function MapNodes() {
  const numNodes = 2720;

  return (
    <div className="nodes-container">
      <div className="nodes-wrapper">
        {Array.from({ length: numNodes }).map((_, index) => {
          return <div key={index} className="node"></div>;
        })}
      </div>
    </div>
  );
}

export default MapNodes;
