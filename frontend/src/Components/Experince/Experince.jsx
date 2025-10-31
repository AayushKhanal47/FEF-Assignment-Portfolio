import React from "react";
import { FaReact, FaJs, FaPython, FaJava } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiExpress,
  SiTypescript,
} from "react-icons/si";
import { RiBuilding2Fill } from "react-icons/ri";

const Experience = () => (
  <section id="Experience" className="w-full px-8 md:px-20 py-20 bg-[#18181B]">
    <h1 className="text-4xl md:text-5xl font-bold text-[#FF4466] mb-12 text-center">
      Experience
    </h1>
    <div className="flex flex-wrap gap-16 justify-center items-center">
      {/* Skills */}
      <div className="grid grid-cols-3 gap-8 bg-[#24243A] bg-opacity-80 p-9 rounded-2xl shadow-lg">
        {[
          { icon: <FaJs color="#FFD600" size={42} />, name: "JS" },
          { icon: <SiTypescript color="#FFD600" size={42} />, name: "TS" },
          { icon: <FaReact color="#FF4466" size={42} />, name: "React" },
          { icon: <SiNextdotjs color="#FF4466" size={42} />, name: "Next" },
          { icon: <SiExpress color="#FFD600" size={42} />, name: "Express" },
          { icon: <SiMongodb color="#FFD600" size={42} />, name: "MongoDB" },
          {
            icon: <SiPostgresql color="#FF4466" size={42} />,
            name: "Postgres",
          },
          { icon: <SiPrisma color="#FFD600" size={42} />, name: "Prisma" },
          { icon: <FaPython color="#FF4466" size={42} />, name: "Python" },
          { icon: <FaJava color="#FFD600" size={42} />, name: "Java" },
        ].map(({ icon, name }, i) => (
          <div
            className="flex flex-col items-center p-3 rounded-xl bg-[#18181B] shadow-md hover:-translate-y-1 transition-all duration-200"
            key={name}>
            {icon}
            <span className="text-xs mt-2 text-[#F3F3F3]">{name}</span>
          </div>
        ))}
      </div>
      {/* Experience Card */}
      <div className="bg-[#24243A] bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-2xl px-10 py-9 max-w-lg text-[#F3F3F3]">
        <div className="flex gap-7 items-start">
          <RiBuilding2Fill color="#FFD600" size={54} />
          <div>
            <h2 className="text-2xl font-bold mb-3 text-[#FFD600]">
              Frontend Developer Intern — Bitflux Technologies
            </h2>
            <ul className="list-disc ml-5 space-y-3 text-lg">
              <li>
                Developed responsive web interfaces with React, TypeScript, and
                Tailwind CSS.
              </li>
              <li>
                Collaborated on projects integrating Express, MongoDB, and
                Prisma.
              </li>
              <li>
                Worked with PostgreSQL and RESTful APIs for data management and
                visualization.
              </li>
              <li>Optimized frontend performance and improved UX.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Experience;
