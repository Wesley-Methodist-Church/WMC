// Import modules
import React from "react";

// Commitee card component
const CardMember = () => {
  return (
    <div className="shadow-xl card bg-base-100">
      <figure>
        <img src="./barcode.svg" alt="Shoes" className="w-full aspect-[3/4]" />
      </figure>
      <div className="p-4 card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default CardMember;
