'use client';

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            Hello, I&apos;m{" "}
          </span>{" "}
          <br></br>
          <TypeAnimation
            sequence={[
              "Ali",
              3000,
              "Web Developer",
              3000,
              "Mobile Designer",
              3000,
              "UI/UX Designer",
              3000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
            I am a web developer and I love to build web applications.
          </p>
          <div>
            <button className="w-full sm:w-fit bg-gradient-to-br from-blue-500 via-green-500 to-blue-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full ml-4 mr-4">
              Hire Me
            </button>
            <button className="w-full sm:w-fit m-4 bg-gradient-to-br from-blue-500 via-green-500 to-blue-500 px-1 py-1 text-white rounded-full">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[220px] lg:w-[500px] lg:h-[380px] relative">
            <Image
              src="/images/hero-image.jpeg"
              alt="Hero Image"
              width={448}
              height={336}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
