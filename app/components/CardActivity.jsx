// Import modules
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

// Activity card component
const CardActivity = ({
  image,
  title,
  date,
  place,
  link,
  description,
  time,
  room,
  contact,
  person,
}) => {
  return (
    <div className="shadow-xl card bg-base-100">
      <figure className="border aspect-[4/3]">
        <img src={image} alt="Activity Image" className="w-full" />
      </figure>
      <div className="p-8 card-body">
        <h2 className="text-2xl card-title">{title}</h2>
        <div className="my-4">
          <p className="font-semibold">{date}</p>
          <p className="font-semibold">{place}</p>
        </div>
        <Link
          href={{
            pathname: link,   // link is the name of the activity
            query: {
              image,
              title,
              date,
              place,
              description,
              time,
              room,
              contact,
              person,
            },
          }}
          className="flex items-center justify-center w-32 text-white bg-red-700 btn btn-red hover:bg-red-600"
        >
          More Info <FaLongArrowAltRight color="white" />
        </Link>
      </div>
    </div>
  );
};

export default CardActivity;
