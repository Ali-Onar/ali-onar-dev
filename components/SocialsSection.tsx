"use client";

import React from "react";
import {
  FaTwitter,
  FaMedium,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { GiOppositeHearts } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const socialAccounts = [
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <FaTwitter size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: <FaLinkedinIn size={24} />,
  },
  {
    name: "Medium",
    url: "https://medium.com",
    icon: <FaMedium size={24} />,
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: <FaGithub size={24} />,
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: <FaYoutube size={24} />,
  },
  {
    name: "LoadMuscle",
    url: "https://loadmuscle.com",
    icon: <GiOppositeHearts size={24} />,
  },
];

const SocialsSection = () => {
  return (
    <section id="socials">
      <div className="py-8">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Social Accounts
        </h2>
        <div className="container mx-auto flex flex-col items-center text-white">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
            {socialAccounts.map((account, index) => (
              <Link
                key={index}
                href={account.url}
                className="border border-white-400 p-2 rounded-full hover:text-gray-400 hover:border-gray-400"
                target="_blank"
              >
                {account.icon}
              </Link>
            ))}
          </div>
          <Link
            href="mailto:info@mail.com"
            className="text-base hover:text-gray-300"
          >
            <AiOutlineMail size={24} className="inline mr-2" />
            info@mail.com
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
