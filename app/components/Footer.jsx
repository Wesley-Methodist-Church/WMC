// Import modules
import React from "react";
import Image from "next/image";

// Import icons
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

// Footer component
const Footer = () => {
  return (
    <div className="flex flex-col gap-4 p-12 text-white bg-zinc-900">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <Image
            className="flex-1"
            src="./logo.svg"
            width={200}
            height={400}
            alt={"Background Image"}
          />
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <p>+61 455 8407</p>
          <p>
            Jl. Sultan Agung No.0, Petisah Tengah, Kec. Medan Petisah, Kota
            Medan, Sumatera Utara 20111, Indonesia
          </p>
          <a href="mailto:wesleymedan@gmail.com">wesleymedan@gmail.com</a>
        </div>

        <div className="flex flex-row items-center justify-end flex-1 gap-4">
          <a
            href="https://www.facebook.com/wmc.wesley.9"
            target="_blank"
            className="flex items-center justify-center h-10 bg-red-600 rounded-full aspect-square"
          >
            <FaFacebookF size={25} />
          </a>
          <a
            href="https://www.youtube.com/@WesleyMethodistChurchMedan"
            target="_blank"
            className="flex items-center justify-center h-10 bg-red-600 rounded-full aspect-square"
          >
            <FaYoutube size={25} />
          </a>
          <a
            href="https://maps.app.goo.gl/MAy3g2VRtdThjYKM9"
            target="_blank"
            className="flex items-center justify-center h-10 bg-red-600 rounded-full aspect-square"
          >
            <FaLocationDot size={25} />
          </a>
        </div>
      </div>

      <div className="flex justify-end w-full">
        <span className="mt-4 text-xs">
          &copy; Wesley Methodist Church Medan 2024
        </span>
      </div>
    </div>
  );
};

export default Footer;
