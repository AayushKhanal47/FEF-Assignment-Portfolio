import React from "react";

const ProjectCard = ({ title, main, demoLink, codeLink }) => {
  return (
    <div className="bg-[#24243A] bg-opacity-70 rounded-2xl shadow-2xl p-7 w-80 glass-card backdrop-blur-md transition-transform hover:-translate-y-2 hover:shadow-yellow-200 duration-300 border border-[#FF4466] hover:border-[#FFD600]">
      <h3 className="text-xl font-bold text-[#FFD600] mb-2">{title}</h3>
      <p className="text-[#F3F3F3] mb-4">{main}</p>
      <div className="flex gap-4 mt-auto">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-5 rounded-full font-semibold text-[#18181B] bg-[#FFD600] hover:bg-[#FF4466] hover:text-white duration-300 text-center shadow-inner">
          Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-5 rounded-full font-semibold text-[#18181B] bg-[#FF4466] hover:bg-[#FFD600] hover:text-black duration-300 text-center shadow-inner">
          Source
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
