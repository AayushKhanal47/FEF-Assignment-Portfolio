import React from "react";

const ProjectCard = ({ title, main, demoLink, codeLink }) => {
  return (
    <div className="p-5 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <h3 className="text-xl md:text-2xl font-bold leading-normal mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-md leading-tight mb-4">{main}</p>
      <div className="mt-auto flex gap-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 text-sm md:text-md hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 text-sm md:text-md hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
