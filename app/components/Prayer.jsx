// Import modules
import React from "react";
import Image from "next/image";

// Prayer component
const Prayer = () => {
  return (
    <div>
      <div className="relative flex flex-col items-start justify-center text-white min-h-80">
        <div className="absolute inset-0 bg-[url('/prayer.png')] bg-cover bg-bottom sm:bg-left "></div>

        <div className="relative flex flex-col gap-8 px-12 md:gap-12">
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            Prayer Request / Personal Counseling
          </h1>

          <a
            href="mailto:wesleymcmedan@gmail.com?subject=Prayer Request"
            className="px-8 py-4 font-semibold text-red-600 bg-white rounded-xl w-fit"
          >
            Make A Request
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 py-20">
        <p className="w-5/6 text-center md:text-lg md:w-1/3">
          "so in Christ we, though many, form one body, and each member belongs
          to all the others"
        </p>
        <p className="font-bold md:text-lg">Romans 12:5</p>
      </div>
    </div>
  );
};

export default Prayer;
