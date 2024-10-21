// import modules
import React from "react";

// vision and mission component
const VisionMission = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-12 text-white bg-gradient-to-r from-red-900 via-red-800 to-red-900">
      <div className="flex flex-col items-center justify-center md:mb-4">
        <h2 className="mb-8 text-3xl font-bold">Our Vision</h2>
        <p className="md:text-lg">To be a Growing Church</p>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="mb-8 text-3xl font-bold">Our Mission</h2>
        <ul className="flex flex-col w-full gap-2 md:flex-row md:gap-0">
          <li className="flex-1 md:text-lg text-center">
            To Grow Into Deeper Relationship With God
          </li>
          <li className="flex-1 md:text-lg text-center">
            To Grow Disciple-makers
          </li>
          <li className="flex-1 md:text-lg text-center">
            To Grow By Serving God And Others
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VisionMission;
