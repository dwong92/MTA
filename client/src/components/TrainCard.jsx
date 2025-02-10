import React from "react";

export default function TrainCard({ train, trainImage }) {
  return (
    <div className="train-card">
      <img className="trainCardLogo" src={train.subwayImage} />
      <p>
        <strong>Start:</strong> {train.start}
      </p>
      <p>
        <strong>End:</strong> {train.end}
      </p>
      <p>
        <strong>Service Advisory:</strong>{" "}
        <span dangerouslySetInnerHTML={{ __html: train.status }} />
      </p>
      <p>
        <span dangerouslySetInnerHTML={{ __html: train.alternative }} />
      </p>
    </div>
  );
}
