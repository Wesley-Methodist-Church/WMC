// import modules
import React from "react";
import Image from "next/image";

// prayer component
const Prayer = () => {
  return (
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
      <div></div>
    </div>
  );
};

export default Prayer;
