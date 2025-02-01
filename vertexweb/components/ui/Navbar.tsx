"use client";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState, FC } from "react";

const Navbar: FC = () => {
  const [activeNav, setActiveNav] = useState<string | null>("#home");
  return (
    <section id="Navbar">
      <nav className="p-2 bottom-8 gap-4 -translate-x-1/2 fixed bg-white/20 backdrop-blur-md rounded-full shadow-lg max-w-max z-[50] flex left-1/2 smx:bottom-16">
        {[
          { href: "#home", icon: <AiOutlineHome />, id: "#home" },
          { href: "#about", icon: <AiOutlineUser />, id: "#about" },
          { href: "#testimonials", icon: <BiBook />, id: "#testimonials" },
          { href: "#services", icon: <RiServiceLine />, id: "#services" },
          { href: "#contact", icon: <BiMessageSquareDetail />, id: "#contact" },
        ].map((navItem) => (
          <a
            key={navItem.id}
            href={navItem.href}
            onClick={() => setActiveNav(navItem.id)}
            className={
              activeNav === navItem.id
                ? "active bg-transparent p-2 rounded-[50px] flex text-light text-lg hover:bg-nav transition-all duration-300 sm:text-base"
                : "bg-transparent p-2 rounded-[50px] flex text-light text-lg hover:bg-nav transition-all duration-300 sm:text-base"
            }
          >
            {navItem.icon}
          </a>
        ))}
      </nav>
    </section>
  );
};

export default Navbar;
