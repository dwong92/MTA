import React from "react";
import Header from "./HeaderContainer";
import SubwayGroupContainer from "./SubwayGroupContainer";

export default function HomePage({ trainGroups }) {
  return (
    <div>
      <SubwayGroupContainer trainGroups={trainGroups} />
    </div>
  );
}
