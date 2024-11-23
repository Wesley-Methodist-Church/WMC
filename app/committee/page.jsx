// Import modules
import React from "react";
import CardMember from "../components/CardMember";

// Donation Page
const page = () => {
  const committees = {
    pastor: [
      {
        image: "./committee/HembangTambun.jpeg",
        name: "Rev. Hembang Tambun, M.Th",
        position: "Pastor In Charge",
      },
      {
        image: "./committee/ParamithaSharaRajagukguk.jpeg",
        name: "GI. Paramitha Shara Rajagukguk, S.Th",
        position: "Associate Pastor",
      },
      {
        image: "./committee/MariatyYananto.jpeg",
        name: "Mrs. Mariaty Yananto, M.Div",
        position: "Associate Pastor",
      },
    ],
    advisory: [
      {
        image: "./board_advisory/AndjurkenTarigan.jpeg",
        name: "Mr. Andjurken Tarigan",
      },
      {
        image: "./board_advisory/BennySirait.jpeg",
        name: "Mr. Benny Sirait",
      },
      {
        image: "./avatar.jpg",
        name: "dr. Hendra Djuang",
      },
      {
        image: "./board_advisory/YohanPranata.jpeg",
        name: "dr. Yohan Pranata",
      },
      {
        image: "./board_advisory/TimothyYananto.jpeg",
        name: "Mr. Timothy Yananto",
      },
      {
        image: "./board_advisory/KusnadiPhandi.jpeg",
        name: "Mr. Kusnadi Phandi",
      },
    ],
    member: [
      {
        image: "./committee/DonaldSiahaan.jpeg",
        name: "Mr. Donald Siahaan",
        position: "Lay Leader",
      },
      {
        image: "./committee/StevenLie.jpeg",
        name: "Mr. Steven Lie",
        position: "Associate Lay Leader",
      },
      {
        image: "./committee/SunaryoSitopu.jpg",
        name: "Mr. Sunaryo Sitopu",
        position: "Secretary",
      },
      {
        image: "./committee/JulianaHimawan.jpeg",
        name: "Mrs. Juliana Himawan",
        position: "Vice Secretary",
      },
      {
        image: "./committee/Erlisa.jpeg",
        name: "Ms. Erlisa",
        position: "Treasurer",
      },
      {
        image: "./committee/BobManullang.jpeg",
        name: "Mr. Bob Manullang",
        position: "Chair of Membership & Evangelism Committee",
      },
      {
        image: "./committee/DebbieSilitonga.jpeg",
        name: "Ms. Debbie Silitonga",
        position: "Chair of Christian Education Committee",
      },
      {
        image: "./committee/EkunSiregar.jpeg",
        name: "Mr. Ekun Siregar",
        position: "Chair of Finance & Stewardship Committee",
      },
      {
        image: "./committee/Hermansyah.jpeg",
        name: "Mr. Hermansyah",
        position: "Chair of Missions & Outreach Committee",
      },
      {
        image: "./committee/OclimSilitonga.jpeg",
        name: "Ms. Oclim Silitonga",
        position: "Chair of Social Concern Committee",
      },
      {
        image: "./committee/JefriSirait.jpeg",
        name: "Mr. Jefri Sirait",
        position: "Pastor-Parish Relations Committee (PPRC)",
      },
      {
        image: "./committee/JoyceTobing.jpeg",
        name: "Ms. Joyce Tobing",
        position: "Chair of Worship & Music Committee",
      },
      {
        image: "./committee/Yacub.jpeg",
        name: "Mr. Yacub",
        position: "Chair of Property & Maintenance Committee",
      },
      {
        image: "./committee/ErlinaTeguh.jpeg",
        name: "Mrs. Erlina Teguh",
        position: "Sunday School Superintendent",
      },
      {
        image: "./committee/HubertHHutabarat.jpeg",
        name: "Mr. Hubert H. Hutabarat",
        position: "President of Men Fellowship",
      },
      {
        image: "./committee/ElviSolitaSiahaan.jpeg",
        name: "Ms. Elvi Solita Siahaan",
        position: "President of Women Fellowship",
      },
      {
        image: "./avatar.jpg",
        name: "Ms. Miranda Elizabeth Marpaung",
        position: "President of Methodist Youth Fellowship (MYF)",
      },
      {
        image: "./avatar.jpg",
        name: " Mr. Marvel Diovan Siahaan",
        position: "President of Teenagers Fellowship",
      },
    ],
  };

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center gap-20 my-32">
        <h2 className="text-4xl font-bold text-center md:text-5xl">
          Pastor In Charge
        </h2>
        <div className="grid w-3/4 gap-12 p-5 md:p-0 md:grid-cols-2 lg:grid-cols-3">
          {committees.pastor.map((committee) => (
            <CardMember
              image={committee.image}
              name={committee.name}
              position={committee.position}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-20 my-32">
        <h2 className="text-4xl font-bold text-center md:text-5xl">
          Advisory Board
        </h2>
        <div className="grid w-3/4 gap-12 p-5 md:p-0 md:grid-cols-2 lg:grid-cols-3">
          {committees.advisory.map((committee) => (
            <CardMember image={committee.image} name={committee.name} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-20 my-32">
        <h2 className="text-4xl font-bold text-center md:text-5xl">
          Board Member
        </h2>
        <div className="grid w-3/4 gap-12 p-5 md:p-0 md:grid-cols-2 lg:grid-cols-4">
          {committees.member.map((committee) => (
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
