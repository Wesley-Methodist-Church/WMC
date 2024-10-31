// Import modules
import React from "react";

// Commitee card component
const CardMember = ({ image, name, position }) => {
  return (
    <div className="shadow bg-base-100">
      <figure>
        <img src={image} alt="Shoes" className="w-full aspect-[3/4]" />
      </figure>
      <div className="p-4 card-body">
        <h2 className="card-title">{name}</h2>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default CardMember;
