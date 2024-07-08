import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="text-white  w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hooBank logo" className="w-[124px] h-[32px]" />
      <ul className="hidden sm:flex justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-white font-poppins cursor-pointer font-normal ${
              index == navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end items-center flex-1">
        <img
          src={toggle ? close : menu}
          alt="menu logo"
          className="w-[28px]  object-contain"
          onClick={() => setToggle((pre) => !pre)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } border p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col  justify-end items-center flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-white font-poppins cursor-pointer font-normal ${
                  index == navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
