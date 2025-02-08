import React from "react";
import MTA from "../assets/MTA.png";

export default function HeaderContainer({ trainGroup }) {
  return (
    <div className=" headerContainer">
      <img id="MTA-Logo" src={MTA} alt="MTA Logo" />
      <h1>Rider Alert</h1>
    </div>
  );
}
