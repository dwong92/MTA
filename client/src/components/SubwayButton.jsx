import React from "react";
import { useParams } from "react-router-dom";

export default function SubwayButton({
  trainGroup,
  train,
  image,
  index,
  trainToggle,
}) {
  return (
    <div className="trainButtonsContainer">
      <button
        onClick={() => trainToggle(train)}
        index={index}
        className="mtaLineButton"
      >
        <img src={image} alt={`Train ${train}`} className="train-icon" />
      </button>
    </div>
  );
}
