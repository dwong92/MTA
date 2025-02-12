import React from "react";

export default function TrainCard({ train, trainImage }) {
  return (
    <div className="train-card">
      <div className="logoandtime">
        <img className="trainCardLogo" src={train.subwayImage} />
        <p>
          <strong>Start:</strong> {train.start}
        </p>
        <p>
          <strong>End:</strong> {train.end}
        </p>
      </div>
      <div className="description">
        <p>
          <strong>Service Advisory:</strong>&nbsp;{" "}
          <span dangerouslySetInnerHTML={{ __html: train.status }} />
        </p>
        {/* <p>
        <span dangerouslySetInnerHTML={{ __html: train.alternative }} />
      </p> */}
      </div>
    </div>
  );
}
