import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate

export default function SubwayGroupButton({ trainGroup, images }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/subwayGroup/${trainGroup}`);
  };

  const groupImage = Object.values(images).map((image) => (
    <img src={image} alt={trainGroup} className="groupTrainIcon" />
  ));

  return (
    <div className="groupImageContainer" onClick={handleClick}>
      {groupImage}
    </div>
  );

}
