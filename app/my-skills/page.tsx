"use client";
import React from "react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";

const ProficientSkills = SkillData.filter((skill) => {
  const name = skill.name.toLowerCase();
  return !["react native", "expo", "jest", "react testing library"].includes(
    name
  );
});

const LearningSkills = SkillData.filter((skill) => {
  const name = skill.name.toLowerCase();
  return ["react native", "expo", "jest", "react testing library"].includes(
    name
  );
});

const Page = () => {
  return (
    <div
      style={{ backgroundImage: `url('/bg-2.jpg')` }}
      className="min-h-screen w-screen flex flex-col items-center justify-center py-20 bg-cover bg-center"
    >
      <div className="flex flex-col gap-10 max-w-[90%] w-full text-center items-center">
        <h1 className="font-semibold text-white text-[35px] md:text-[50px]">
          Technical Skills
        </h1>

        <div className="flex flex-col w-full items-center gap-6">
          <h2 className="text-purple-400 text-3xl font-bold">Proficient</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8 px-4 w-full justify-items-center">
            {ProficientSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center relative">
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-200 mt-2 text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full items-center gap-6 mt-8">
          <h2 className="text-red-400 text-3xl font-bold">Current Focus</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8 px-4 w-full">
            {LearningSkills.map((skill, index) => (
              <div
                key={index}
                className={`flex flex-col items-center opacity-70 ${
                  index === 0 ? "col-start-3" : ""
                }`}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center relative">
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-400 mt-2 text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
