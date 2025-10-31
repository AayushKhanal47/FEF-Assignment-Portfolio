import React from "react";
import AboutImg from "../../assets/avatar.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => (
  <section
    id="About"
    className="w-full px-8 md:px-24 py-20 flex flex-col md:flex-row items-center gap-14 bg-[#18181B]">
    <div className="md:w-1/2 flex justify-center">
      <img
        src={AboutImg}
        alt="Aayush Khanal"
        className="rounded-3xl border-4 border-[#FFD600] shadow-2xl w-64 md:w-96 object-cover"
      />
    </div>
    <div className="md:w-1/2 bg-[#24243A] bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-lg px-8 py-10 space-y-8">
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#FFD600] mb-6">
        About Me
      </h2>
      <div className="space-y-7">
        {[
          {
            title: "Frontend Developer",
            desc: "Modern, responsive UIs using React, TypeScript, and Tailwind CSS. Always focusing on seamless experiences and pixel-perfect design.",
            color: "#FF4466",
          },
          {
            title: "Database Developer",
            desc: "Optimizing MongoDB, PostgreSQL, and scalable NoSQL. Prioritizing data integrity, robust queries, and performance for real-world apps.",
            color: "#FFD600",
          },
          {
            title: "Backend Developer",
            desc: "Building APIs, authentication, and server-side logic with Node.js, Express, and cloud services. Secure, scalable, maintainable systems for modern web.",
            color: "#FF4466",
          },
        ].map(({ title, desc, color }, i) => (
          <div key={title} className="flex items-start gap-5">
            <IoArrowForward size={32} className="mt-1" style={{ color }} />
            <div>
              <h3
                className={`text-xl md:text-2xl font-bold mb-1`}
                style={{ color }}>
                {title}
              </h3>
              <p className="text-[#F3F3F3] text-base md:text-lg">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default About;
