// Import modules
import React from "react";
import CardActivity from "../components/CardActivity";

// Donation Page
const Page = () => {
  const activities = [
    {
      image: "./activity/",
      title: "Sunday School",
      date: "Every Sunday",
      place: "Wesley Methodist Church Medan",
      time: "08:30 - 10:00 WIB",
      room: "Joda Hall & Sunday School Classes",
      verse:
        "“Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.” (Matthew 19:14).",
      description: `Jesus has a deep love for children and desires for them to know Him more. To support this, we offer Sunday School classes for infants up to children in the sixth grade, helping them to grow in their knowledge of Jesus and learn to follow Him. Classes are organized according to age or school grade, ensuring that each child receives teaching suited to their level. With the guidance of over 20 dedicated Sunday School teachers and assistants, children will have the opportunity to develop spiritually in a creative and joyful environment. The classes are as follows: Batila for children under 5 years, Grade 1-2, Grade 3-4, and Grade 5-6. This structure allows each child to thrive and grow closer to Jesus among supportive and caring mentors.`,
    },
    {
      image: "/activity/TeenagersFellowship.jpeg",
      title: "Teenagers Fellowship",
      date: "Every Sunday",
      place: "Wesley Methodist Church Medan",
      time: "08:30 - 10:30 WIB",
      room: "Lilyana Hall",
      verse:
        "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well. (Psalm 139:14).",
      description: `The teenage years can be difficult for many, including in their spiritual life. They are considered 'too old' to join in Sunday School, but 'too young' to be in the Youth group. So, we provide Teenagers Fellowship to be a home where they can grow together in faith through Sunday Service, Bible Study group and other fellowship. Since their young age, they will truly know that they are precious in God's sight and they also learn to serve one another.`,
    },
    {
      image: "/activity/MethodistYouthFellowship.jpeg",
      title: "Methodist Youth Fellowship",
      date: "Every Saturday",
      place: "Wesley Methodist Church Medan",
      time: "18:30 - 20:00 WIB",
      room: "Lilyana Hall",
      verse: `"For you have been my hope, Sovereign Lord, my confidence since my youth." (Psalm 71:5)`,
      description: `Full of energy, potentials, and innovative ideas are identic with young age. And it is a privilege to dedicate them all to the glory of God. The existence of Wesley Methodist Church is one of the evidences of it. By the grace of God, this church was started in 1958 through MYF. God used young people to fulfill His calling in the past, and He is still doing it now. We welcome all young people to join and experience God's love together in a warm, joyful and youthful environment. Let's grow together in obedience to God, to be His instruments of glory, like the motto of MYF: “Christ Above All”.`,
    },
    {
      image: "/activity/ChurchChoir.jpeg",
      title: "Church Choir",
      date: "Every Saturday",
      time: "16.30 - 18.30 WIB",
      room: "Choir Room",
      place: "Wesley Methodist Church Medan",
      description: `Church Choir is a ministry and fellowship for all Wesley Methodist Church members and friends whom have singing talent from God and want to serve through praise and worship our Lord. We have Choir practice every Saturday afternoon at 16.30 - 18.30 WIB. Please join us and for further information, please contact us.`,
    },
    {
      image: "./activity/CedarsFellowship.jpeg",
      title: "Cedars Fellowship",
      verse: `They bear fruit even when they are old; they are filled with vitality and have many leaves. (Psalms 92:14).`,
      description: `Cedar is a famous tree of Lebanon. It is delicate, smooth, hard and durable. It's aroma has very high medicinal value. The temple of God in Jerusalem was made of cedar trees in the time of King Solomon. Because of its characteristics, the cedar has become a symbol of greatness, of nobility, of strength and of incorruptibility. We pray that the senior members of our church will be like cedar trees: bear fruit and filled vitality in their old age. If you are 60 or above, please join this fellowship.`,
      people: ["dr. Yohan Pranata", "Ms. Eunice Lie"],
      contacts: ["0811606518", "08126468485"],
    },
    {
      image: "./activity/",
      title: "Missions & Outreach Ministry",
      verse: `“For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life." (John 3:16)`,
      description:
        "In His boundless love, God desires that no one should perish, but that everyone should come to repentance. Beyond serving within the church and its members, we are also called to reach out and share the good news with unbelievers and marginalized communities. We are called to be His instruments of love and hope, extending His light even into the darkest corners of the world. Our outreach ministries include various programs such as the Tandam Hilir Preaching Point, Trinity Tamil Methodist Community (TTMC), Refugees Ministry, and reaching out to Unreached People Groups. Through these ministries, we strive to embody and share God's love, bringing hope to those who need it most.",
      people: ["Mr. Hermansyah"],
      contacts: ["081361701321"],
    },
    {
      image: "/activity/WomenFellowship.jpeg",
      title: "Women Fellowship",
      description: "",
      people: ["Ms. Elvi Solita Siahaan "],
      contacts: [""],
    },
    {
      image: "/activity/MenFellowship.jpeg",
      title: "Men Fellowship",
      description: "",
      people: ["Mr. Hubert H. Hutabarat"],
      contacts: [""],
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
        <div className="grid gap-8 p-10 md:grid-cols-2 lg:grid-cols-3 md:p-12 lg:w-3/4">
          {activities.map((activity, index) => {
            return (
              <CardActivity
                key={index}
                image={activity.image}
                title={activity.title}
                date={activity.date}
                time={activity.time}
                room={activity.room}
                place={activity.place}
                verse={activity.verse}
                description={activity.description}
                contacts={activity.contacts}
                people={activity.people}
                link={`activities/${activity.title}`}
              />
            );
          })}
        </div>
      </div>
      {/* <div className="gap-10 my-32">
        <h2 className="mb-10 text-4xl font-bold text-center md:text-5xl">
          Recent Activity
        </h2>
        <div className="flex flex-col gap-10 px-8 py-10 md:px-20 lg:flex-row">
          <div className="rounded-xl flex-1 aspect-[4/3] overflow-hidden items-center justify-center">
            <img
              src="/barcode.svg"
              className="w-full"
              alt="Recent Activity Image"
            />
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
      </div> */}
    </div>
  );
};

export default Page;
