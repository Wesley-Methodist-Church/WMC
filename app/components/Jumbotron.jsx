// Import modules
import React from "react";

// Jumbotron component
const Jumbotron = () => {
  return (
    <div className="relative flex flex-col text-white items-center justify-center min-h-[92vh]">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/jumbotron.svg')] bg-cover bg-center"></div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="mb-2 text-2xl font-bold md:text-6xl">
          WELCOME TO THE WESLEY
        </h1>
        <h1 className="text-2xl font-bold md:text-6xl">
          METHODIST CHURCH MEDAN
        </h1>
        <p className="mt-4 md:text-xl">We are glad to have you here.</p>
      </div>
    </div>
  );
};

export default Jumbotron;
