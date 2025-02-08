import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SubwaySingleContainer from "../containers/SubwaySingleContainer";
import SubwayButton from "../components/SubwayButton";
import Trains from "../components/Trains";
import backButton from "../assets/backButton.png";

export default function TrainStatusPage({ trainGroups, data }) {
  const { subwayGroup } = useParams();
  const [trainData, setTrainData] = useState([]);
  const trainGroup = trainGroups.find((group) => group.name == subwayGroup);
  const [trainSet, setTrainSet] = useState(trainGroup.train);

  const trainToggle = (train) => {
    setTrainSet(
      (prevTrainSet) =>
        prevTrainSet.includes(train)
          ? prevTrainSet.filter((t) => t !== train) // Remove train
          : [...prevTrainSet, train] // Add train
    );
  };

  useEffect(() => {
    const result = data.filter((group) => trainSet.includes(group.subway));

    setTrainData(result);
  }, [trainSet, data]);

  return (
    <div>
      <SubwaySingleContainer trainGroup={trainGroup} trainToggle={trainToggle} trainSet={trainSet}/>
      <div className="train-container">
        {trainData.map((train, index) => (
          <Trains key={index} train={train} />
        ))}
      </div>
    </div>
  );
}
