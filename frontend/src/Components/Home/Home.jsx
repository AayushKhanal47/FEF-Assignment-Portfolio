import React from "react";
import avatarImg from "../../assets/avatar.jpg";

const Home = () => (
  <section className="bg-gradient-to-br from-[#24243A] via-[#18181B] to-[#FF4466] w-full flex flex-col-reverse md:flex-row py-24 px-8 md:px-24 min-h-screen justify-center items-center gap-12">
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-3 text-[#FFD600] drop-shadow">
        Hello, I’m <span className="text-[#FF4466]">Aayush</span>
      </h1>
      <p className="mt-6 text-lg md:text-2xl text-[#F3F3F3]">
        Creative{" "}
        <span className="text-[#FFD600] font-semibold">
          Full-Stack Developer
        </span>{" "}
        passionate about building impactful apps with{" "}
        <span className="text-[#FF4466] font-bold">
          React, TypeScript, Express
        </span>
        . Always experimenting with <span className="text-[#FFD600]">AI</span>{" "}
        and <span className="text-[#FFD600]">cloud</span> for smarter solutions!
      </p>
      <button className="mt-10 bg-[#FF4466] hover:bg-[#FFD600] transition-all text-white font-bold py-3 px-8 rounded-full shadow-lg hover:text-[#18181B] text-xl">
        Contact Me
      </button>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img
        src={avatarImg}
        alt="Aayush"
        className="w-56 md:w-96 rounded-2xl object-cover shadow-2xl border-4 border-[#FFD600] hover:border-[#FF4466] transition-all duration-300"
      />
    </div>
  </section>
);
export default Home;
