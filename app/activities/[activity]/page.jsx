// Using 'use client' to enable client-side rendering for stateful components
"use client";

// Import Modules
import { useSearchParams } from "next/navigation";
import { FaRegCalendarAlt, FaWhatsapp } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import React from "react";

// Activity Page
const Page = () => {
  // Get search params
  const searchParams = useSearchParams();

  // Get items from search params
  const image = searchParams.get("image");
  const title = searchParams.get("title");
  const date = searchParams.get("date");
  const place = searchParams.get("place");
  const time = searchParams.get("time");
  const room = searchParams.get("room");
  const verse = searchParams.get("verse");
  const description = searchParams.get("description");
  const contactString = searchParams.get("contacts");
  const contacts = contactString ? JSON.parse(contactString) : [];
  const peopleString = searchParams.get("people");
  const people = peopleString ? JSON.parse(peopleString) : [];

  return (
    <div className="mt-20">
      <div
        className="h-72 md:h-96 lg:h-[420px] flex flex-col justify-end py-20 px-8 md:px-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h2 className="text-4xl font-bold text-white md:text-5xl">{title}</h2>
      </div>
      <div className="flex flex-col items-center gap-20 p-8 py-20 md:p-32">
        <h4 className="text-2xl font-bold">{verse}</h4>
        <p className="text-center">{description}</p>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            {/* Display date and time if both are not null */}
            {date && time && (
              <>
                <FaRegCalendarAlt size={30} />
                <p className="font-semibold">{date}</p>
                <p className="font-semibold">{time}</p>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            {/* Display place and room if both are not null */}
            {place && room && (
              <>
                <SlLocationPin size={30} />
                <div>
                  <p className="font-semibold">{place}</p>
                  <p className="font-semibold">{room}</p>
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
            {/* Display contact and people if both are not null */}
            {contacts &&
              people &&
              people.map((person, i) => (
                <div className="flex items-center gap-2">
                  <FaWhatsapp size={30} />
                  <a href={`https://wa.me/${contacts[i]}`} target="_blank">
                    <p className="font-semibold">{contacts[i]}</p>
                    <p className="font-semibold">{person}</p>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
