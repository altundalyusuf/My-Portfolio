import ProjectCard from "@/components/ProjectCard";
import { ProfessionalProjects, PersonalProjects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen h-screen flex flex-col items-center bg-center bg-cover overflow-auto"
    >
      <h1 className="text-white text-xl lg:text-3xl font-bold mt-32 md:mt-28 mb-10 text-center">
        Professional Experience / Enterprise Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] xl:max-w-[70%] mb-10 text-center">
        {ProfessionalProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
      <h1 className="text-white text-xl md:text-3xl font-bold mb-10 text-center">
        Personal Projects / Side Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] xl:max-w-[70%] mb-28 text-center">
        {PersonalProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
