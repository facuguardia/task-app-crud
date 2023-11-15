'use client'
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-screen flex flex-col md:flex-row justify-between items-center py-5 px-10">
      <h3 className="text-2xl font-bold uppercase">
        <Link href="/">TareaNova</Link>
      </h3>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:text-white"
        >
          {menuOpen ? "Cerrar" : "Menú"}
        </button>
      </div>
      <ul
        className={`${
          menuOpen ? "flex flex-col md:flex-row" : "hidden md:flex"
        } md:items-center gap-4 text-md font-semibold mt-4 md:mt-0`}
      >
        <li className="hover:text-gray-400 transition-all duration-300">
          <Link href="/about">Sobre mí</Link>
        </li>
        <li className="bg-green-500 hover:bg-green-400 text-black transition-all duration-300 px-4 py-2 rounded-md border-black shadow-md">
          <Link href="/new">Nueva tarea</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
