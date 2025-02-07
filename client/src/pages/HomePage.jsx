import React, { useState, useEffect } from "react";
import Header from "../containers/HeaderContainer";
import SubwayGroupContainer from "../containers/SubwayGroupContainer";
import Trains from "../components/Trains";

export default function HomePage({ trainGroups, data }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/subway");
  //       const result = await response.json();
  //       setData(result); // Store the fetched data in state
  //     } catch (error) {
  //       console.error("Fetch Error:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <SubwayGroupContainer trainGroups={trainGroups} />
      <div className="train-container">
        {data.map((train, index) => (
          <Trains key={index} train={train} />
        ))}
      </div>
    </div>
  );
}
