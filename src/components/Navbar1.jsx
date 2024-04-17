import React, { useState, useEffect } from "react";
import "./navbar.css";
import useResponsiveMenu from "../utils/hooks/useResponsiveMenu";
import { NAVLINKS } from "../utils/constants/navConstants";

const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useResponsiveMenu();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderLinks = (extraClass = "") =>
    NAVLINKS.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className={`text-white ${extraClass}`}
      >
        {link.name}
      </a>
    ));

  const buttonStyle =
    "bg-[#060C03] text-sm text-white py-2 px-4 border-t border-l border-[#ECD200] border-b-4 border-r-4 rounded-sm opacity-100 hover:bg-black";

  return (
    <nav className="lg:py-10 xs:py-2 xs:px-2 sm:px-6 md:px-8 flex justify-between items-center relative">
      <a href="#">
        <img
          src="src/assets/Yellow.png"
          alt="Logo"
          className="object-cover max-h-36 max-w-36 lg:h-auto"
        />
      </a>
      <div
        id="nav-menu"
        className="sm:text-sm lg:text-lg sm:gap-4 md:gap-6 lg:gap-12 hidden sm:flex"
      >
        {renderLinks()}
      </div>
      <div className="sm:block hidden">
        <button className={`${buttonStyle} lg:mr-8 md:mr-negative`}>
          Exclusive Mint Coming Soon
        </button>
      </div>
      <button onClick={toggleMenu} className="p-6 sm:hidden">
        <i className="fas fa-bars text-white"></i>
      </button>
      <div
        className={`fixed ${
          isMenuOpen ? "" : "hidden"
        } text-white  z-20 inset-0 bg-gradient-to-r from-[#030301] via-[#0E0020] to-[#000000]`}
      >
        <div id="nav-bar" className="flex justify-between items-center">
          <a href="#">
            <img
              src="src/assets/Yellow.png"
              alt="Logo"
              className="object-cover ml-4 max-h-36 max-w-36 lg:h-auto"
            />
          </a>
          <button onClick={toggleMenu} className="p-6 sm:hidden">
            <i className="fas fa-times text-white"></i>{" "}
          </button>
        </div>
        <div className="mt-6 flex flex-col">
          {renderLinks("font-medium p-3")}
          <div className="mt-6 ml-4">
            <button className={`${buttonStyle}`}>
              Exclusive Mint Coming Soon
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
