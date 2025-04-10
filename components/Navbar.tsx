"use client";

import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./i18n/LanguageChanger";
import Image from "next/image";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Social", path: "#social" },
  { title: "Blog", path: "https://alitunacanonar.medium.com/" },
  { title: "Youtube", path: "https://www.youtube.com/@alionar60" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap container lg:py-4 items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="flex items-center gap-1 text-xl md:text-2xl font-bold text-white"
        >
          <Image src="/logo.png" alt="Ali Onar logo" width={32} height={32} unoptimized />
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="font-medium flex p-4 md:p-0 rounded-lg flex-row md:space-x-8 mt-0">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink title={t(`Navbar.${link.title}`)} href={link.path} />
              </li>
            ))}
            <li>
              <LanguageChanger />
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
