import React from "react";
import { Link } from "react-router-dom";

export default function SubwayButton({ trainGroup, images }) {
  return (
    <Link to={"/subwayGroup/" + trainGroup}>
      <button className="mtaLineButton">
        <div className="imageContainer">
          {images.map((image) => (
            <img src={image} alt={trainGroup} className="train-icon" />
          ))}
        </div>
      </button>
    </Link>
  );
}
