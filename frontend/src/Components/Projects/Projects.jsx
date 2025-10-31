import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-6 justify-center">
        <ProjectCard
          title="Imagify – AI Image Generator"
          main="A full-stack AI-powered image generation app built with React, Express, MongoDB, and Razorpay. Users can create and download AI-generated images from text prompts."
          demoLink="#"
          codeLink="https://github.com/AayushKhanal47/Imagify"
        />

        <ProjectCard
          title="Job Tracker – Cloudflare Full Stack App"
          main="A TypeScript-based job management platform using React and Hono backend (Cloudflare Workers). Includes job posting, applications, Prisma + PostgreSQL, and JWT auth."
          demoLink="#"
          codeLink="https://github.com/AayushKhanal47/Job-Tracker"
        />

        <ProjectCard
          title="Employee Management System"
          main="A React + Express + MongoDB system for managing employees, tasks, and roles. Features task assignment, tracking, and admin dashboard."
          demoLink="#"
          codeLink="https://github.com/AayushKhanal47/Employee-Management-System"
        />

        <ProjectCard
          title="AI-Powered Code Editor"
          main="An intelligent web-based code editor that provides real-time AI feedback, error detection, and suggestions using React and OpenAI APIs."
          demoLink="#"
          codeLink="https://github.com/AayushKhanal47/AI-Powered-Code-Editor"
        />
      </div>
    </div>
  );
};

export default Projects;
