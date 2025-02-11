import React from "react";
import SubwayGroupButton from "../components/SubwayGroupButton";

export default function SideBarContainer({ trainGroups }) {
  


  return (
    <div className="sideBarContainer">
      {trainGroups.map((group) => (
        <SubwayGroupButton key={group.name} trainGroup={group.name} images={group.images} />
      ))}
       
       {/* <SubwayGroupButton trainGroups = {trainGroups} /> */}
    </div>
  );
}
