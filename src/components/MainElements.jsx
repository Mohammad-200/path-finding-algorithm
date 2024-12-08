import React from "react";
import { FaTruckMonster } from "react-icons/fa";
import { SiTarget } from "react-icons/si";
import { TfiFlagAlt } from "react-icons/tfi";
import "./mainElements.css";

function MainElements() {
  return (
    <div className="elements-container">
      <div>
        <FaTruckMonster />
        <p>Start Node</p>
      </div>

      <div>
        <TfiFlagAlt />
        <div>subpath node</div>
      </div>
      <div>
        <SiTarget />
        <div>Target node</div>
      </div>
      <div>
        <div className="node-element"></div>
        <div>unvisited node</div>
      </div>
      {/* I will add more elements later */}
    </div>
  );
}

export default MainElements;
