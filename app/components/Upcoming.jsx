import Image from "next/image";
import React from "react";

const Upcoming = () => {
  return (
    <div className="flex flex-col items-center px-10 my-5 md:px-52">
      <h2 className="mb-16 text-4xl font-semibold text-center md:text-5xl">
        Upcoming Event
      </h2>
      <div className="border-2 border-slate-900 md:w-[500px] md:h-[600px] h-80 w-64 flex items-center justify-center">
        <p className="font-semibold">Upcoming Event Poster</p>
      </div>
    </div>
  );
};

export default Upcoming;
