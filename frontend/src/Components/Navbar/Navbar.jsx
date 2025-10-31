import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu((prev) => !prev);

  return (
    <nav className="fixed w-full top-0 left-0 z-40 bg-[#18181B] shadow-md px-8 md:px-20 py-4 flex items-center justify-between text-white transition-all duration-300">
      <span className="text-2xl md:text-3xl font-extrabold tracking-wider text-[#FFD600] hover:text-[#FF4466] transition-colors cursor-pointer">
        Aayush Portfolio
      </span>
      <ul
        className={`${
          menu
            ? "flex flex-col absolute top-full left-0 w-full bg-[#24243A] rounded-b-xl shadow-lg py-4 space-y-3"
            : "hidden md:flex md:space-x-12"
        } md:static md:bg-transparent md:rounded-none md:shadow-none md:py-0 md:space-y-0 font-semibold`}>
        {["About", "Experience", "Projects", "Contact"].map((section) => (
          <li key={section} className="relative group">
            <a
              href={`#${section}`}
              onClick={() => setMenu(false)}
              className="px-3 py-2 text-lg rounded-xl hover:bg-[#FFD600] hover:text-[#18181B] transition duration-200 cursor-pointer">
              {section}
              {section === "Projects" && (
                <MdArrowDropDown className="inline ml-2 align-middle group-hover:rotate-180 transition-transform" />
              )}
            </a>
            {/* Example Dropdown */}
            {section === "Projects" && (
              <ul className="absolute left-0 top-10 bg-[#24243A] rounded-xl shadow-lg hidden group-hover:block md:min-w-[150px]">
                <li>
                  <a
                    href="#AI"
                    className="block px-4 py-2 hover:bg-[#FF4466] transition-colors">
                    AI Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#Cloud"
                    className="block px-4 py-2 hover:bg-[#FFD600] transition-colors">
                    Cloud Apps
                  </a>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
      <button
        aria-label="Toggle Menu"
        onClick={toggleMenu}
        className="md:hidden focus:outline-none">
        {menu ? (
          <RiCloseLine size={32} className="text-[#FFD600]" />
        ) : (
          <RiMenu2Line size={32} className="text-[#FFD600]" />
        )}
      </button>
    </nav>
  );
};
export default Navbar;
