import React from "react";
import avatarImg from "../../assets/avatar.jpg";

const Home = () => {
  return (
    <section className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20 gap-10">
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight">
          Hello, I’m <span className="text-[#6e8efb]">Aayush</span>
        </h1>
        <p className="mt-4 text-base md:text-2xl leading-relaxed tracking-tight text-gray-300">
          A passionate{" "}
          <span className="text-[#aab4ff] font-semibold">
            Full-Stack Developer
          </span>
          . I love building modern, responsive web applications using
          <span className="font-semibold text-white">
            {" "}
            React, TypeScript, and Express
          </span>
          , and I’m always exploring ways to integrate
          <span className="font-semibold text-white">
            {" "}
            AI and cloud technologies
          </span>{" "}
          into real-world projects. My goal is to craft clean, efficient, and
          impactful digital experiences.
        </p>
        <button className="mt-6 text-white text-sm md:text-lg py-2 px-6 bg-[#465697] hover:bg-[#5a6bbf] hover:scale-105 transition-all duration-300 font-semibold rounded-3xl shadow-lg">
          Contact Me
        </button>
      </div>
      <div className="flex justify-center">
        <img
          src={avatarImg}
          alt="Aayush"
          className="w-56 md:w-80 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Home;
