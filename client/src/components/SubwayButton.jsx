import React from "react";
import { useParams } from "react-router-dom";

export default function SubwayButton({ trainGroups }) {
  const { subwayGroup } = useParams();
  const trainGroup = trainGroups.find((group) => group.name === subwayGroup); // Find the group in trainGroups

  return (
    <div className="trainButtonsContainer">
      {trainGroup.images.map((image, index) => (
          <button key={index} className="mtaLineButton">
            <img
              src={image}
              alt={`Train ${trainGroup.train[index]}`}
              className="train-icon"
            />
          </button>
      ))}
    </div>
  );
}
