import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SubwaySingleContainer from "../containers/SubwaySingleContainer";
import TrainCard from "../components/TrainCard";

export default function TrainStatusPage({ trainGroups, data }) {
  const { subwayGroup } = useParams();
  const [trainData, setTrainData] = useState([]);
  let trainGroup = trainGroups.find((group) => group.name == subwayGroup);
  const [trainSet, setTrainSet] = useState(trainGroup.train);

  useEffect(() => {
    trainGroup = trainGroups.find((group) => group.name == subwayGroup);
    setTrainSet(trainGroup.train)
  }, [subwayGroup])

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
    <div className="mainContentContainer">
      <SubwaySingleContainer
        trainGroup={trainGroup}
        trainToggle={trainToggle}
        trainSet={trainSet}
      />
      <div className="train-container2">
        {trainData.map((train) => (
          <TrainCard train={train} />
        ))}
      </div>
    </div>
  );
}
