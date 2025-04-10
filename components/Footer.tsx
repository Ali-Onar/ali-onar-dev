'use client';

import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col items-center justify-center gap-4">
        <Link
            href="mailto:alitunacanonar59@gmail.com"
            className="text-base hover:text-slate-300 text-slate-400"
          >
            <AiOutlineMail size={24} className="inline mr-2" />
            alitunacanonar59@gmail.com
          </Link>
        <p className="text-slate-400">2025 - Ali Onar</p>
      </div>
    </footer>
  );
};

export default Footer;
