import satData from "./satData";
import React from "react";
import './styling.css'; 

const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  return (
    <div className="flex-container">
      {orbitTypes.map((type, index) => {
        return (
          <button onClick={() => filterByType(type)} key={index}>
            {type} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};
export default Buttons;