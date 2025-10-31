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

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>

      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTypescript color="#3178C6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNextdotjs color="#FFFFFF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="#808080" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPostgresql color="#336791" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPrisma color="#0C344B" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#3776AB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#E76F00" size={50} />
          </span>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <RiBuilding2Fill color="#00ADB5" size={50} />
            <span className="text-white">
              <h2 className="leading-tight text-xl font-semibold">
                Frontend Developer Intern — Bitflux Technologies
              </h2>

              <ul className="text-sm p-2 list-disc list-inside">
                <li>
                  Developed responsive web interfaces using React, TypeScript,
                  and Tailwind CSS.
                </li>
                <li>
                  Collaborated on full-stack projects integrating Express,
                  MongoDB, and Prisma.
                </li>
                <li>
                  Worked with PostgreSQL and RESTful APIs to manage and
                  visualize data efficiently.
                </li>
                <li>
                  Contributed to optimizing frontend performance and enhancing
                  user experience.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
