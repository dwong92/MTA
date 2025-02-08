import React from "react";
import SubwayGroupButton from "../components/SubwayGroupButton";

export default function SubwayGroupContainer({ trainGroups }) {
  return (
    <div className="subwayGroupContainer">
      <div className="subwayGroupContainerLayout">
        {trainGroups.map((group) => (
          <SubwayGroupButton trainGroup={group.name} images={group.images} />
        ))}
      </div>
    </div>
  );
}
