// Using 'use client' to enable client-side rendering for stateful components
"use client";

// Import Modules
import { useSearchParams } from "next/navigation";
import { FaRegCalendarAlt, FaWhatsapp } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import React from "react";

// Activity Page
const Page = () => {
  const searchParams = useSearchParams();

  const image = searchParams.get("image");
  const title = searchParams.get("title");
  const date = searchParams.get("date");
  const place = searchParams.get("place");
  const time = searchParams.get("time");
  const room = searchParams.get("room");
  const description = searchParams.get("description");
  const contact = searchParams.get("contact");
  const person = searchParams.get("person");

  return (
    <div className="mt-20">
      <div
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
      }}
        className="bg-cover h-72 md:h-96 lg:h-[420px] flex flex-col justify-end py-20 px-8 md:px-20"
      >
        <h2 className="text-4xl font-bold text-white md:text-5xl">{title}</h2>
      </div>
      <div className="flex flex-col items-center gap-20 p-8 py-20 md:p-32">
        <p className="text-center">{description}</p>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt size={40} />
            <div>
              <p className="font-semibold">{date}</p>
              <p className="font-semibold">{time}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <SlLocationPin size={40} />
            <div>
              <p className="font-semibold">{place}</p>
              <p className="font-semibold">{room}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp size={40} />
            <a href={`https://wa.me/${contact}`} target="_blank">
              <p className="font-semibold">{contact}</p>
              <p className="font-semibold">{person}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
