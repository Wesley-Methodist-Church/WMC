// import modules
import React from "react";
import Image from "next/image";

// prayer component
const Prayer = () => {
  return (
    <div>
      <div className="relative flex flex-col text-white items-start justify-center min-h-80">
        <div className="absolute inset-0 bg-[url('/prayer.png')] bg-cover bg-bottom sm:bg-left "></div>

        <div className="relative flex flex-col gap-8 md:gap-12 px-12">
          <h1 className="text-white font-bold text-2xl md:text-4xl">
            Prayer Request / Counseling Personal
          </h1>

          <a
            href="mailto:wesleymedan@gmail.com?subject=Prayer Request"
            className="bg-white text-red-600 rounded-xl py-4 px-8 w-fit font-semibold"
          >
            Make A Request
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 py-20"> 
        <p className="md:text-lg w-5/6 md:w-1/3 text-center">
          "so in Christ we, though many, form one body, and each member belongs to all the others"
        </p>
        <p className="md:text-lg font-bold">Romans 12:5</p>
      </div>
    </div>
  );
};

export default Prayer;
