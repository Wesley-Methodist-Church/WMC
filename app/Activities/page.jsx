// Import modules
import React, { act } from "react";
import CardActivity from "../components/CardActivity";

// Donation Page
const Page = () => {
  const activities = [
    {
      title: "Sunday School",
      date: "Every Sunday",
      place: "Wesley Methodist Church Medan",
      time: "08:30 - 10:00 WIB",
      room: "Joda Hall & Sunday School Classes",
      description: `“Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.” (Matthew 19:14).
        Jesus loves the children and He wants them to know Him more and more. So, we provide Sunday School Classes for infants until children in the sixth grade of their Primary School to help them to know Jesus and to obey Him. They are divided into classes based on their age or grade in their schools. More than 20 dedicated Sunday School Teachers and assistants will help them to grow spiritually in the creative and joyful environment.
        Classes: - Batila (5 years below) - Grade 1-2 - Grade 3-4 - Grade 5-6`,
    },
    {
      title: "Teenagers Fellowship",
      date: "Every Sunday",
      place: "Wesley Methodist Church Medan",
      time: "08:30 - 10:30 WIB",
      room: "Lilyana Hall",
      description: `I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well. (Psalm 139:14).
        The teenage years can be difficult for many, including in their spiritual life. They are considered 'too old' to join in Sunday School, but 'too young' to be in the Youth group. So, we provide Teenagers Fellowship to be a home where they can grow together in faith through Sunday Service, Bible Study group and other fellowship. Since their young age, they will truly know that they are precious in God's sight and they also learn to serve one another.`,
    },
    {
      title: "Methodist Youth Fellowship",
      date: "Every Saturday",
      place: "Wesley Methodist Church Medan",
      time: "18:30 - 20:00 WIB",
      room: "Lilyana Hall",
      description: `"For you have been my hope, Sovereign Lord, my confidence since my youth." (Psalm 71:5)
        Full of energy, potentials, and innovative ideas are identic with young age. And it is a privilege to dedicate them all to the glory of God. The existence of Wesley Methodist Church is one of the evidences of it. By the grace of God, this church was started in 1958 through MYF. God used young people to fulfill His calling in the past, and He is still doing it now. We welcome all young people to join and experience God's love together in a warm, joyful and youthful environment. Let's grow together in obedience to God, to be His instruments of glory, like the motto of MYF: “Christ Above All”.`,
    },
    {
      title: "Church Choir",
      date: "Every Saturday",
      time: "16.30 - 18.30 WIB",
      room: "Choir Room",
      place: "Wesley Methodist Church Medan",
      description: `Church Choir is a ministry and fellowship for all Wesley Methodist Church members and friends whom have singing talent from God and want to serve through praise and worship our Lord. We have Choir practice every Saturday afternoon at 16.30 - 18.30 WIB. Please join us and for further information, please contact us.`,
    },
  ];

  return (
    <div className="mt-20">
      <div className="bg-[url('/activity.svg')] bg-cover h-72 md:h-96 lg:h-[420px] flex flex-col justify-center px-8 md:px-20">
        <h2 className="text-4xl font-bold md:text-5xl">ACTIVITIES</h2>
        <p className="font-semibold md:text-xl">Serving the world around us</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 my-20 md:my-32">
        <h2 className="text-4xl font-bold md:text-5xl md:mb-10">
          Our Activities
        </h2>
        <div className="grid gap-8 p-8 md:grid-cols-2 lg:grid-cols-3 md:p-12 lg:w-3/4">
          {activities.map((activity, index) => {
            return (
              <CardActivity
                key={index}
                title={activity.title}
                date={activity.date}
                time={activity.time}
                room={activity.room}
                place={activity.place}
                description={activity.description}
                link={`activities/${activity.title}`}
              />
            );
          })}
        </div>
      </div>
      <div className="gap-10 my-32">
        <h2 className="mb-10 text-4xl font-bold text-center md:text-5xl">
          Recent Activity
        </h2>
        <div className="flex flex-col gap-10 px-8 py-10 md:px-20 lg:flex-row">
          <div className="rounded-xl flex-1 aspect-[4/3] overflow-hidden items-center justify-center">
            <img src="/barcode.svg" className="w-full" />
          </div>
          <div className="flex flex-col items-start justify-center flex-1 gap-8">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">Christmas</h3>
              <p className="font-semibold md:text-xl">
                25 Desember 2023 | Fasilkom-TI USU
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio
              totam minima laborum laboriosam vel, architecto dignissimos magnam
              assumenda eligendi nobis dolorum doloremque maiores. Impedit
              quidem, tenetur consequuntur, aperiam aliquid quasi obcaecati
              blanditiis eveniet exercitationem quaerat repellat aliquam?
              Accusamus hic tenetur soluta aspernatur officiis repellat placeat
              corporis tempore eos veniam et sint, officia, explicabo nisi,
              dolores sapiente. Fugiat excepturi neque ipsam repellendus laborum
              dolorum, libero voluptatum est vero pariatur veniam consequuntur
              sunt quaerat, accusantium molestias ab quisquam quae. Aspernatur
              illo, saepe eligendi excepturi culpa explicabo tenetur magni
              consequatur, corporis exercitationem sit dolor cupiditate ipsum
              dolorem placeat consectetur molestiae neque nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
