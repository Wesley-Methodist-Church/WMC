import Image from "next/image";
import React from "react";

const Upcoming = () => {
  return (
    <div className="flex flex-col items-center px-10 my-5 md:px-52">
      <h2 className="mb-16 text-4xl font-semibold text-center md:text-5xl">
        Upcoming Event
      </h2>

      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <Image src={"/flyer/flyer-1.jpg"} width={360} height={640} />
        <Image src={"/flyer/flyer-2.jpg"} width={360} height={640} />
      </div>
    </div>
  );
};

export default Upcoming;
