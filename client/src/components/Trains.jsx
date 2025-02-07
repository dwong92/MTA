import React from "react";

export default function Trains({ train }) {
  return (
    <div className="train-card">
      <h2>Train: {train.subway}</h2>
      <p><strong>Start:</strong> {train.start}</p>
      <p><strong>End:</strong> {train.end}</p>
      <p><strong>Status:</strong> <span dangerouslySetInnerHTML={{ __html: train.status }} /></p>
      <p><strong>Alternative:</strong> <span dangerouslySetInnerHTML={{ __html: train.alternative }} /></p>
    </div>
  );
}
