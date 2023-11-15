"use client";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-screen flex justify-between items-center py-5 px-10">
      <h3 className="text-2xl font-bold uppercase">
        <Link href="/">TareaNova</Link>
      </h3>

      <ul className="hidden md:flex md:flex-row md:items-center gap-4 text-md font-semibold mt-4 md:mt-0">
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
