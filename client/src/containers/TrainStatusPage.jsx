import React from "react";
import { Link } from "react-router-dom";
import SubwayButton from "../components/SubwayButton";
import backButton from "../assets/backButton.png";

export default function TrainStatusPage({ trainGroups }) {
  return (
    <div>
      <div className="trainButtonsContainer">
        <Link to={"/"}>
          <div className="trainButtonsContainer">
            <button className="mtaLineButton">
              <img className="train-icon" src={backButton} alt="BackButton" />
            </button>
          </div>
        </Link>
        <SubwayButton trainGroups={trainGroups} />
      </div>
    </div>
  );
}
