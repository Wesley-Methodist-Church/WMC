// Import modules
import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

// Contact component
const Connect = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-20">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/jumbotron.svg')] bg-cover bg-center"></div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative w-4/5 gap-4 p-8 overflow-hidden bg-white lg:flex lg:p-16 lg:py-20 rounded-xl md:w-2/3">
        <div className="flex-1">
          <h3 className="mb-8 text-2xl font-bold md:text-3xl">
            Connect With Us!
          </h3>
          <p className="text-sm">
            Jl. Sultan Agung No. 9, Petisah Tengah, Kec. Medan Petisah, Kota
            Medan, Sumatera Utara 20111, Indonesia
          </p>
          <div className="flex flex-col gap-2 mt-8 lg:mt-12 xl:mt-28">
            <div className="flex items-center gap-4">
              <FaFacebookF className="mt-2" />
              <a
                href="https://www.facebook.com/wmc.wesley.9"
                target="_blank"
                className="text-sm underline hover:text-red-600"
              >
                wmc.wesley.9
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaYoutube className="mt-2" />
              <a
                href="https://www.youtube.com/@WesleyMethodistChurchMedan"
                target="_blank"
                className="text-sm underline hover:text-red-600"
              >
                WesleyMethodistChurchMedan
              </a>
            </div>
          </div>
        </div>
        <iframe
          className="mt-8 mb-4 rounded w-60 lg:flex-1 lg:mt-0 lg:mb-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.998725276605!2d98.66335339999999!3d3.5877664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131d6e29a6a63%3A0x86c3705d897cda8!2sWesley%20Methodist%20Church%20Medan!5e0!3m2!1sen!2sid!4v1729259639172!5m2!1sen!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-red-600"></div>
      </div>
    </div>
  );
};

export default Connect;
