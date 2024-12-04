import React from "react";
import { BsLightningFill } from "react-icons/bs";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <BsLightningFill />
        <h1>SpeedyWay</h1>
      </div>
      <div className="navs-container">
        <div className="nav">
          <label htmlFor="dropdown">Algorithms</label>
          <select id="dropdown">
            <option value="option1">Dijkstra's Algorithm</option>
            <option value="option2"> A* Search</option>
            <option value="option3">Breadth-First Search</option>
          </select>
        </div>
        <div className="nav">
          <label htmlFor="dropdown">Mazes & Patterns</label>
          <select id="dropdown">
            <option value="option1">Recursive Division</option>
            <option value="option2">Recursive Division (vertical skew)</option>
            <option value="option3">
              Recursive Division (horizontal skew)
            </option>
          </select>
        </div>
        <div className="nav">
          <label htmlFor="dropdown">speed</label>
          <select id="dropdown">
            <option value="option1">Slow</option>
            <option value="option2">Fast</option>
            <option value="option3">Faster</option>
          </select>
        </div>
        <button type="button">Add subpath</button>
        <button type="button">clearBoard</button>
        <button type="button">clear path</button>
        <button type="button">Visualize</button>
      </div>
    </div>
  );
}

export default Header;
