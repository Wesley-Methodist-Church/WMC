// Import modules
import React from "react";
import CardMember from "../components/CardMember";

// Donation Page
const page = () => {
  const committees = [
    {
      image: "./committee/StevenLie.jpeg",
      name: "Mr. Steven Lie",
      position: "Associate Lay Leader",
    },
    {
      image: "./committee/EkunSiregar.jpeg",
      name: "Mr. Ekun Siregar",
      position: "Finance & Stewardship Committee",
    },
    {
      image: "./committee/Hermansyah.jpeg",
      name: "Mr. Hermansyah",
      position: "Missions & Outreach",
    },
    {
      image: "./committee/JefriSirait.jpeg",
      name: "Mr. Jefri Sirait",
      position: "Pastor-Parish Relations Committee (PPRC)",
    },
    {
      image: "./committee/ErlinaTeguh.jpeg",
      name: "Mrs. Erlina Teguh",
      position: "Sunday School Superintendent",
    },
    {
      image: "./committee/ElviSolitaSiahaan.jpeg",
      name: "Ms. Elvi Solita Siahaan",
      position: "Women Fellowship",
    },
  ];

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center gap-20 my-32">
        <h2 className="text-5xl font-bold text-center">
          Pastoral and Board Members
        </h2>
        <div className="grid w-3/4 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {committees.map((committee) => (
            <CardMember
              image={committee.image}
              name={committee.name}
              position={committee.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
