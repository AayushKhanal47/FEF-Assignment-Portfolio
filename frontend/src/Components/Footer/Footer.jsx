import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#24243A] py-10 px-4 md:px-28 text-white flex flex-col md:flex-row items-center justify-around gap-6">
    <div className="text-center md:text-left">
      <h1 className="text-2xl font-bold text-[#FFD600] mb-2">Contact</h1>
      <p className="text-[#F3F3F3] text-lg">Let's connect!</p>
    </div>
    <ul className="space-y-3 text-lg">
      <li className="flex items-center gap-2 hover:text-[#FFD600] transition-colors">
        <MdOutlineEmail size={22} />{" "}
        <a href="mailto:aayushkhanal810@gmail.com" className="underline"></a>
      </li>
      <li className="flex items-center gap-2 hover:text-[#FF4466] transition-colors">
        <CiLinkedin size={22} />{" "}
        <a
          href="https://www.linkedin.com/in/aayush-khanal-b1ab64290"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"></a>
      </li>
      <li className="flex items-center gap-2 hover:text-[#FFD600] transition-colors">
        <FaGithub size={22} />{" "}
        <a
          href="https://github.com/AayushKhanal47"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"></a>
      </li>
    </ul>
  </footer>
);
export default Footer;
