// Import modules
import React from "react";
import CardMember from "../components/CardMember";

// Donation Page
const page = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center gap-10 my-32">
        <h2 className="text-5xl font-bold text-center">
          Pastoral and Board Members
        </h2>
        <div className="grid w-3/4 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <CardMember />
          <CardMember />
          <CardMember />
          <CardMember />
        </div>
      </div>
    </div>
  );
};

export default page;
