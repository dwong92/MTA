import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // Use useNavigate

// export default function SubwayGroupButton({ trainGroup, images }) {
//   return (
//     <Link to={"/subwayGroup/" + trainGroup}>
//       <button className="mtaLineButton">
//         <div className="imageContainer">
//           {images.map((image) => (
//             <img src={image} alt={trainGroup} className="train-icon" />
//           ))}
//         </div>
//       </button>
//     </Link>
//   );
// }

export default function SubwayGroupButton({ trainGroup, images }) {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(`/subwayGroup/${trainGroup}`); 
  };

  return (
    <div className="mtaLineButton" onClick={handleClick} >
      <div className="groupImageContainer">
        {images.map((image) => (
          <img src={image} alt={trainGroup} className="groupTrainIcon"  />
        ))}
      </div>
    </div>
  );
}