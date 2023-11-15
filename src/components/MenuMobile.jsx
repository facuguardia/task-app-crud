'use client'
import { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function MenuMobile() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div
      className={`lg:hidden bg-black bg-opacity-90 fixed flex justify-center items-center w-full h-full z-50 transition-all duration-500 ${
        menu ? "top-0" : "-top-full"
      }`}
    >
      <nav className="h-screen flex flex-col justify-center items-center">
        {/* Items 1 */}
        <Link
          href="/about"
          className="w-auto h-auto flex justify-start border-b-[1px] border-green-500 px-4 py-3 text-white"
          onClick={closeMenu}
        >
          <span className="text-2xl font-medium flex items-center gap-3">
            Sobre mí
          </span>
        </Link>
        <Link
          href="/new"
          className="w-auto h-auto flex justify-start px-4 py-2"
          onClick={closeMenu}
        >
          <span className="text-2xl text-green-500 font-bold flex items-center gap-3">
            Nueva tarea
          </span>
        </Link>
      </nav>
      {/* Button Mobile */}
      <button
        onClick={() => setMenu(!menu)}
        className="lg:hidden fixed right-4 top-4 text-xl p-2.5 rounded-full text-green-500 z-50"
      >
        {menu ? <RiCloseFill /> : <RiMenu3Fill />}
      </button>
    </div>
  );
}

export default MenuMobile;