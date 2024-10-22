// import modules
import React from "react";
import CardActivity from "../components/CardActivity";

// Donation Page
const page = () => {
  return (
    <div className="mt-20">
      <div className="bg-[url('/activity.svg')] bg-cover h-72 md:h-96 lg:h-[420px] flex flex-col justify-center px-8 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold">ACTIVITIES</h2>
        <p className="md:text-xl font-semibold">Serving the world around us</p>
      </div>
      <div className="flex flex-col items-center justify-center my-20 md:my-32 gap-10">
        <h2 className="text-4xl md:text-5xl font-bold md:mb-10">Our Activities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:p-12 lg:w-3/4">
          <CardActivity title={"Sunday School"} date={"25 Desember 2023"} place={"Fasilkom-TI USU"} link={"activities/asda"}/>
          <CardActivity title={"Sunday School"} date={"25 Desember 2023"} place={"Fasilkom-TI USU"} link={"activities/asda"}/>
          <CardActivity title={"Sunday School"} date={"25 Desember 2023"} place={"Fasilkom-TI USU"} link={"activities/asda"}/>
          <CardActivity title={"Sunday School"} date={"25 Desember 2023"} place={"Fasilkom-TI USU"} link={"activities/asda"}/>
        </div>
      </div>
      <div className="my-32 gap-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Recent Activity</h2>
        <div className="flex px-8 md:px-20 py-10 gap-10 flex flex-col lg:flex-row">
          <div className="rounded-xl flex-1 aspect-[4/3] overflow-hidden items-center justify-center">
            <img src="/barcode.svg" className="w-full"/>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-8">
            <div>
              <h3 className="font-bold text-2xl md:text-3xl">Christmas</h3>
              <p className="font-semibold md:text-xl">25 Desember 2023 | Fasilkom-TI USU</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio totam minima laborum laboriosam vel, architecto dignissimos magnam assumenda eligendi nobis dolorum doloremque maiores. Impedit quidem, tenetur consequuntur, aperiam aliquid quasi obcaecati blanditiis eveniet exercitationem quaerat repellat aliquam? Accusamus hic tenetur soluta aspernatur officiis repellat placeat corporis tempore eos veniam et sint, officia, explicabo nisi, dolores sapiente. Fugiat excepturi neque ipsam repellendus laborum dolorum, libero voluptatum est vero pariatur veniam consequuntur sunt quaerat, accusantium molestias ab quisquam quae. Aspernatur illo, saepe eligendi excepturi culpa explicabo tenetur magni consequatur, corporis exercitationem sit dolor cupiditate ipsum dolorem placeat consectetur molestiae neque nam.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
