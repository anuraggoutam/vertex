"use client";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState, FC } from "react";

const Navbar: FC = () => {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  return (
    <section id="Navbar" className=" ">
      <nav
        className="bg-gradient-to-r from-gray-900/40 via-gray-800/40 to-gray-900/40 max-w-max p-4 z-50 flex left-1/2 
         bottom-6 gap-8 rounded-[50px] BCD -translate-x-1/2 fixed shadow-lg transition-all duration-300
         sm:p-2 sm:gap-4 pointer-events-auto"
      >
        <a
          href="#home"
          onClick={() => setActiveNav("#home")}
          className={
            activeNav === "#home"
              ? "active bg-transparent p-2 rounded-[50px] flex text-light text-lg hover:bg-nav transition-all duration-300 sm:text-base"
              : "bg-transparent p-2 rounded-[50px] flex text-light text-lg hover:bg-nav transition-all duration-300 sm:text-base"
          }
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={
            activeNav === "#about"
              ? "active bg-transparent p-2 rounded-[50px] flex text-light text-lg hover:bg-nav transition-all duration-300 sm:text-base"
              : "bg-transparent p-2 rounded-[50px] flex text-light text-lg hover:bg-nav transition-all duration-300 sm:text-base"
          }
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experiance"
          onClick={() => setActiveNav("#experiance")}
          className={
            activeNav === "#experiance"
              ? "active bg-transparent p-2 rounded-[50px] flex text-light text-lg hover:bg-nav transition-all duration-300 sm:text-base"
              : "bg-transparent p-2 rounded-[50px] flex text-light text-lg hover:bg-nav transition-all duration-300 sm:text-base"
          }
        >
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={
            activeNav === "#services"
              ? "active bg-transparent p-2 rounded-[50px] flex text-light text-lg hover:bg-nav transition-all duration-300 sm:text-base"
              : "bg-transparent p-2 rounded-[50px] flex text-light text-lg hover:bg-nav transition-all duration-300 sm:text-base"
          }
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={
            activeNav === "#contact"
              ? "active bg-transparent p-2 rounded-[50px] flex text-light text-lg hover:bg-nav transition-all duration-300 sm:text-base"
              : " bg-transparent p-2 rounded-[50px] flex text-light text-lg hover:bg-nav transition-all duration-300 sm:text-base"
          }
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </section>
  );
};

export default Navbar;
