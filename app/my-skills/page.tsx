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
      className="h-screen w-full overflow-y-scroll overflow-x-hidden flex flex-col items-center pt-28 lg:pt-20 pb-20 bg-cover bg-center"
    >
      <div className="flex flex-col gap-3 lg:gap-8 max-w-[90%] w-full text-center items-center">
        <h1 className="font-semibold text-white text-[35px] md:text-[50px] border-b-4 border-purple-600 pb-2">
          Technical Skills
        </h1>

        <div className="flex flex-col w-full items-center gap-6 border-b-2 border-gray-700 pb-8">
          <h2 className="text-purple-400 text-3xl font-bold">Proficient</h2>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-x-16 px-4 w-full">
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

        <div className="flex flex-col w-full items-center gap-6 mb-8">
          <h2 className="text-red-400 text-3xl font-bold">Current Focus</h2>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 px-4 w-full">
            {LearningSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center opacity-70"
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
