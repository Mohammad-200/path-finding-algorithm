import React, { useState } from "react";
import { FaTruckMonster } from "react-icons/fa";
import { SiTarget } from "react-icons/si";
import "./mapNodes.css";

function MapNodes() {
  const numNodes = 2720;
  const [positions, setPositions] = useState({
    startNode: 760,
    targetNode: 790,
  });

  const handleDragStart = (event, type) => {
    event.dataTransfer.setData("dragType", type); // Set drag type: "start" or "target"
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const dragType = event.dataTransfer.getData("dragType");

    setPositions((prevPositions) => ({
      ...prevPositions,
      [`${dragType}Node`]: index,
    }));
  };

  return (
    <div className="nodes-container">
      <div className="nodes-wrapper">
        {Array.from({ length: numNodes }).map((_, index) => {
          return (
            <div
              key={index}
              className="node"
              onDragOver={(e) => e.preventDefault()} // Allow dropping
              onDrop={(e) => handleDrop(e, index)} // Handle drop
            >
              {positions.startNode === index && (
                <div draggable onDragStart={(e) => handleDragStart(e, "start")}>
                  <FaTruckMonster className="truck" />
                </div>
              )}
              {positions.targetNode === index && (
                <div
                  draggable
                  onDragStart={(e) => handleDragStart(e, "target")}
                >
                  <SiTarget className="target" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MapNodes;
