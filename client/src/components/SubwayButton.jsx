import React from "react";
import { useParams } from "react-router-dom";

export default function SubwayButton({ train, image, trainSet, trainToggle }) {
  return (
    <div className="singleImageContainer" onClick={() => trainToggle(train)}>
      <img
        className={`${
          trainSet.includes(train)
            ? "singleTrainIconSelected"
            : "singleTrainIconUnselected"
        }`}
        src={image}
        alt={`Train ${train}`}
      />
    </div>
  );
}
