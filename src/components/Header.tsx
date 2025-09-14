"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border border-gray-100 p-1.5 flex justify-between items-center max-w-4xl mt-3.5 rounded-md font-sans mx-4 md:mx-auto sticky top-1.5 bg-white z-50">
      <h1 className="text-2xl font-bold cursor-pointer pl-1.5">zuno</h1>
      <nav className="md:block hidden">
        <ul className="flex space-x-4 font-medium text-gray-600">
          <li className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition">
            Home
          </li>
          <li className="cursor-pointer px-2 py-1 rounded transition">Pages</li>
          <li className="cursor-pointer px-2 py-1 rounded transition">
            Template
          </li>
        </ul>
      </nav>
      <div>
        <button className="bg-[#d2f0a3] hover:bg-[#b6db7d] text-black px-4 py-2.5 rounded cursor-pointer md:block hidden">
          Request demo
        </button>
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <Menu className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>
      <div
        className={`absolute mt-2 bg-white border border-gray-100 rounded-md shadow-lg md:hidden z-50 transition-all duration-300 ease-in-out origin-top top-16 w-[90%] ${
          isMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="p-4 space-y-3">
          <ul className="space-y-2 font-medium text-gray-600">
            <li className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition">
              Home
            </li>
            <li className="cursor-pointer px-2 py-1 rounded transition">
              Pages
            </li>
            <li className="cursor-pointer px-2 py-1 rounded transition">
              Template
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
