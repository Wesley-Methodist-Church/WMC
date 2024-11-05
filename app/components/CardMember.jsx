// Import modules
import React from "react";

// Committee card component
const CardMember = ({ image, name, position }) => {
  return (
    <div className="border shadow bg-base-100">
      <figure>
        <img src={image} alt="Committee Member" className="w-full aspect-[3/4]" />
      </figure>
      <div className="p-4 card-body">
        <h2 className="card-title">{name}</h2>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default CardMember;
