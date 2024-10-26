// Using 'use client' to enable client-side rendering for stateful components
"use client";

// Import modules
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { useState } from "react";

// History component
const History = () => {
  const [curHistoryIndex, setCurHistoryIndex] = useState(0);

  const histories = [
    {
      year: 2024,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, doloremque! Nobis voluptate eius temporibus at totam id voluptatibus ab harum a quidem nisi quo, numquam est iure amet obcaecati pariatur quibusdam dolorum cupiditate sunt corporis soluta non et repellendus! Veritatis.",
      image: "/barcode.svg",
    },
    {
      year: 2025,
      desc: "Alam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, doloremque! Nobis voluptate eius temporibus at totam id voluptatibus ab harum a quidem nisi quo, numquam est iure amet obcaecati pariatur quibusdam dolorum cupiditate sunt corporis soluta non et repellendus! Veritatis.",
      image: "/barcode.svg",
    },
    {
      year: 1029,
      desc: "Makan malam Alam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, doloremque! Nobis voluptate eius temporibus at totam id voluptatibus ab harum a quidem nisi quo, numquam est iure amet obcaecati pariatur quibusdam dolorum cupiditate sunt corporis soluta non et repellendus! Veritatis.",
      image: "/barcode.svg",
    },
  ];

  const nextHistory = () => {
    return setCurHistoryIndex((prev) => {
      if (prev == histories.length - 1) {
        prev = 0;
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const prevHistory = () => {
    return setCurHistoryIndex((prev) => {
      if (prev === 0) {
        prev = histories.length - 1;
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="box-border flex flex-col items-center px-10 my-5 md:px-52">
      <h2 className="mb-16 text-4xl font-semibold text-center md:text-5xl">
        History of Our Church
      </h2>
      <div className="flex flex-col items-center gap-4 md:flex-row justify-content-center md:gap-10">
        <div className="flex-1 aspect-[4/3] flex justify-center items-center rounded-xl overflow-hidden">
          <img src={histories[curHistoryIndex].image} className="w-full" />
        </div>
        <div className="flex flex-col flex-1 gap-4 md:gap-10">
          <h3 className="text-3xl font-bold">
            {histories[curHistoryIndex].year}
          </h3>
          <p>{histories[curHistoryIndex].desc}</p>
          <div className="flex gap-4">
            <button onClick={prevHistory} className="p-1 bg-red-700 rounded">
              <IoArrowBackOutline color="white" />
            </button>
            <button onClick={nextHistory} className="p-1 bg-red-700 rounded">
              <IoArrowForward color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
