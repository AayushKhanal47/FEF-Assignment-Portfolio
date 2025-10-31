import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-8 md:p-12 items-center gap-6">
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-lg space-y-2">
        <li className="flex items-center gap-2">
          <MdOutlineEmail size={22} />
          <a href="mailto:aayushkhanal810@gmail.com" className="hover:underline">
            aayushkhanal810@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <CiLinkedin size={22} />
          <a
            href="https://www.linkedin.com/in/aayush-khanal-b1ab64290"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline">
            linkedin.com/in/aayushkhanal
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaGithub size={22} />
          <a
            href="https://github.com/AayushKhanal47"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline">
            github.com/aayushkhanal
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
