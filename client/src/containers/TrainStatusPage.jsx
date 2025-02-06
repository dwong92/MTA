import React from "react";
import SubwayButton from "../components/SubwayButton";

export default function TrainStatusPage({ trainGroups }) {
  return (
    <div>
      <div className="trainButtonsContainer">
        <SubwayButton trainGroups={trainGroups} />
      </div>
    </div>
  );
}
