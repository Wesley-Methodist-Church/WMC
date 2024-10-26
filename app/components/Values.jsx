// Import modules
import React from "react";
import Image from "next/image";

// Our core values component
const Values = () => {
  const section = (value, index) => {
    return (
      <div className="flex w-full mb-16">
        {/* Desktop Version */}
        <div className="hidden gap-8 md:grid md:grid-cols-2">
          {index % 2 === 0 ? (
            <>
              <div className="flex flex-col justify-center flex-1 min-h-40">
                <h3 className="my-2 mb-4 text-2xl font-semibold md:text-3xl">
                  {value.title}
                </h3>
                <p className="text-lg">{value.description} </p>
              </div>
              <div className="flex-1 relative aspect-[4/3]">
                <Image
                  src={`/${value.image}.png`}
                  alt="adsa"
                  className="h-full rounded"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex-1 relative aspect-[4/3]">
                <Image
                  src={`/${value.image}.png`}
                  alt="adsa"
                  className="h-full rounded"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col justify-center flex-1 min-h-40">
                <h3 className="my-2 mb-4 text-2xl font-semibold md:text-3xl">
                  {value.title}
                </h3>
                <p className="text-lg">{value.description} </p>
              </div>
            </>
          )}
        </div>

        {/* Mobile Version */}
        <div className="flex flex-col md:hidden">
          <div className="w-full min-h-40">
            <h3 className="my-2 mb-4 text-2xl font-semibold md:text-3xl">
              {value.title}
            </h3>
            <p>
              {value.description}{" "}
              <span className="inline-block h-4 w-72"></span>
            </p>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src={`/${value.image}.png`}
              alt="adsa"
              className="h-full rounded"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    );
  };

  const values = [
    {
      title: "Core Value 1",
      description:
        "As inspired by Methodism movement of the founder John Wesley (1703-1791), Methodists  met regularly for bible study and prayer, to receive communion and do acts of charity to express their social holiness.",
      image: "value-1",
    },
    {
      title: "Core Value 2",
      description:
        "We believe Christ died for all of humanity, not just for a limited group, and thus everyone is entitled to God's grace and protection; according to the measure of knowledge given them will be saved.",
      image: "value-2",
    },
    {
      title: "Core Value 3",
      description:
        'The Holy Spirit assures a Christian of their salvation directly, through an inner "experience" (assurance of salvation).',
      image: "value-3",
    },
    {
      title: "Core Value 4",
      description:
        "Christians in this life are capable of Christian perfection and are commanded by God to pursue it.",
      image: "value-4",
    },
  ];

  return (
    <div className="flex flex-col items-center px-10 my-5 md:px-52">
      <h2 className="mb-16 text-4xl font-semibold text-center md:text-5xl">
        Our Core Values
      </h2>
      {values.map((value, index) => section(value, index))}
    </div>
  );
};

export default Values;
