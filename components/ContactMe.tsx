/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TbMail } from "react-icons/tb";
import { GoCodeOfConduct } from "react-icons/go";
import { BsLightningCharge } from "react-icons/bs";

const ContactMe = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact me</h2>
      <p className="text-gray-200">
        <span className="inline-flex items-baseline gap-1">
          <TbMail color="white" />
          Feel free to
        </span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-red-400 font-bold">
          connect with me
        </span>{" "}
        via{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 font-bold">
          LinkedIn
        </span>{" "}
        or explore my{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400 font-bold">
          GitHub
        </span>{" "}
        profile by clicking on the icons.
      </p>
      <p className="text-gray-200">
        <span className="inline-flex items-baseline gap-1">
          <GoCodeOfConduct color="white" />
          I'm always open to new
        </span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-300 font-bold">
          opportunities, collaborations
          <span className="text-gray-200 font-normal">, and</span> discussions
          <span className="text-gray-200 font-normal">.</span>
        </span>{" "}
        <br />
        <span className="text-sm">
          (Open to Relocation & Remote Opportunities)
        </span>
      </p>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-red-400 font-bold mt-1 flex items-baseline gap-1">
        <BsLightningCharge color="white" />
        Looking forward to connecting with you!
      </p>
    </div>
  );
};

export default ContactMe;
