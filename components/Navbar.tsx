"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/linkedinProfile.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-lg sm:text-[25px] font-semibold">
          Yusuf
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Altundal{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2 me-8">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={32}
            height={32}
            className="hover:cursor-pointer"
            onClick={() => window.open(social.url, "_blank")}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
