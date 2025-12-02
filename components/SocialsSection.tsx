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
import Link from "next/link";
import { useTranslation } from "react-i18next";

const socialAccounts = [
  {
    name: "X",
    url: "https://x.com/alionar60",
    icon: <FaTwitter size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ali-tunacan-onar",
    icon: <FaLinkedinIn size={24} />,
  },
  {
    name: "Medium",
    url: "https://medium.com/@alitunacanonar",
    icon: <FaMedium size={24} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Ali-Onar",
    icon: <FaGithub size={24} />,
  },
  {
    name: "YouTube",
    url: "www.youtube.com/@alionar60",
    icon: <FaYoutube size={24} />,
  },
];

const SocialsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="social">
      <div className="py-8">
        <h2 className="text-center text-4xl font-bold text-white my-8 md:mb-6">
          {t("Social.title")}
        </h2>
        <div className="container mx-auto flex items-center justify-center gap-2 text-white">
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
      </div>
    </section>
  );
};

export default SocialsSection;
