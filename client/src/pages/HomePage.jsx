import React, { useState, useEffect } from "react";
import SubwayGroupContainer from "../containers/SubwayGroupContainer";
import TrainCard from "../components/TrainCard";

export default function HomePage({ trainGroups, data }) {
  
  return (
    <div>
      <SubwayGroupContainer trainGroups={trainGroups} />
      <div className="train-container">
        {data.map((train, index) => (
          <TrainCard key={index} train={train} />
        ))}
      </div>
    </div>
  );
}
