"use client";
import Link from "next/link";
import { useState } from "react";
import {VscMenu, VscClose} from 'react-icons/vsc'

const navItems = [
  {
    name: "Home",
    url: "#",
  },
  {
    name: "Blog",
    url: "#blog",
  },
  {
    name: "Contact",
    url: "#contact",
  },
  {
    name: "About",
    url: "#about",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className={"flex flex-col justify-start bg-light z-30 space-y-20 p-8 " + (isOpen ? 'min-h-screen fixed min-w-full bg-slate-50 text-slate-800' : '')}>

      <div className="menu relative z-20 flex  justify-between items-center">

        <div className="logo">
          <h1 className="text-3xl">LOGO</h1>
        </div>

        <div className="hambuguer">
          <div className="cursor-pointer relative" onClick={toggleMenu}>
            { isOpen ? <VscClose className="text-4xl" data-aos="zoom-in" data-aos-offset="900" data-aos-easing="ease-in-sine" />  : <VscMenu data-aos="zoom-in" data-aos-offset="900" data-aos-easing="ease-in-sine" className="text-3xl font-thin" />}
          </div>
        </div>

      </div>


      {isOpen && (
        <nav className="nav-menu relative" data-aos="fade-right" >
          <ul className="absolute flex w-full flex-col items-start space-y-8 sm:px-8 px-4">
            {navItems.map((item) => (
              <li key={item.name} onClick={toggleMenu} className="sm:text-7xl border-b-2 border-spacing-8 pb-4 text-slate-500 uppercase hover:text-slate-300 hover:w-full border-slate-400 transition-all delay-300 hover:border-slate-400 text-5xl font-extralight">
                <Link href={item.url}> {item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
