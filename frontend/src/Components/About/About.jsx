import React from "react";
import AboutImg from "../../assets/avatar.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="text-white md:flex items-center flex-col md:flex-row justify-center bg-black bg-opacity-30 shadow-xl rounded-lg p-12 mx-4 md:mx-20 gap-10">
      <div className="md:w-1/2 flex justify-center md:justify-start">
        <img
          src={AboutImg}
          alt="About"
          className="rounded-xl md:h-80 object-cover shadow-lg"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>

        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-start">
            <IoArrowForward size={28} className="mt-1 text-[#6e8efb]" />
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-semibold">
                Frontend Developer
              </h3>
              <p className="text-sm md:text-md leading-relaxed">
                I build modern, responsive, and user-friendly web interfaces
                using React, TypeScript, and Tailwind CSS. I focus on creating
                seamless user experiences, interactive components, and polished
                designs that work flawlessly across devices.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <IoArrowForward size={28} className="mt-1 text-[#6e8efb]" />
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-semibold">
                Database Developer
              </h3>
              <p className="text-sm md:text-md leading-relaxed">
                I design, implement, and optimize databases using MongoDB,
                PostgreSQL, and NoSQL solutions. I ensure data integrity,
                efficient queries, and scalable storage to support robust web
                applications.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <IoArrowForward size={28} className="mt-1 text-[#6e8efb]" />
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-semibold">
                Backend Developer
              </h3>
              <p className="text-sm md:text-md leading-relaxed">
                I develop server-side logic, RESTful APIs, and authentication
                systems using Node.js, Express, and cloud services. I focus on
                building secure, scalable, and maintainable backend systems that
                power modern web apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
