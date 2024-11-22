// Import modules
import React from "react";
import Image from "next/image";

// Donation Page
const page = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center justify-center gap-10 my-32">
        <h2 className="text-4xl font-bold text-center md:text-5xl">
          Help Us Grow
        </h2>
        <Image src="./barcode.svg" width={250} height={250} alt={"QRIS"} />
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-center md:text-3xl">
            Yay Methodist Wesley Sultan <br /> Agung Medan
          </h3>
          <p className="text-center md:text-2xl">3491 36 9696</p>
        </div>
      </div>
    </div>
  );
};

export default page;
