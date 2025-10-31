import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section
    id="Projects"
    className="bg-[#18181B] py-24 px-4 md:px-20 text-white min-h-screen">
    <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-[#FF4466]">
      Featured Projects
    </h1>
    <div className="flex flex-wrap gap-8 justify-center">
      {/* Cards; update links/titles as needed */}
      <ProjectCard
        title="Imagify – AI Image Generator"
        main="Create AI images with stunning UI. Powered by React, MongoDB, Express and Razorpay."
        demoLink="#"
        codeLink="https://github.com/AayushKhanal47/Imagify"
      />
      <ProjectCard
        title="Job Tracker – Full Stack"
        main="Modern tracking with React, Hono, Prisma + PostgreSQL. Secure JWT auth for jobs."
        demoLink="#"
        codeLink="https://github.com/AayushKhanal47/Job-Tracker"
      />
      <ProjectCard
        title="Employee Management System"
        main="All-in-one React+Express+MongoDB system for workforce management."
        demoLink="#"
        codeLink="https://github.com/AayushKhanal47/Employee-Management-System"
      />
      <ProjectCard
        title="AI-Powered Code Editor"
        main="Innovative code editor with AI feedback, error detection and tips."
        demoLink="#"
        codeLink="https://github.com/AayushKhanal47/AI-Powered-Code-Editor"
      />
    </div>
  </section>
);
export default Projects;
