import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backButton from "../assets/backButton.png";
import SubwayButton from "../components/SubwayButton";

export default function SubwaySingleContainer({
  trainGroup,
  trainToggle,
  trainSet,
}) {
  const navigate = useNavigate();

  const handleClickBackButton = () => {
    navigate("/");
  };

  return (
    <div className="subwaySingleContainer">
      <div onClick={() => handleClickBackButton()}>
        <img
          className="train-icon"
          src={backButton}
          alt="BackButton"
          id="backButton"
        />
      </div>
      {trainGroup.images.map((image, index) => (
        <SubwayButton
          train={trainGroup.train[index]}
          image={image}
          index={index}
          trainToggle={trainToggle}
          trainSet={trainSet}
        />
      ))}
    </div>
  );
}
