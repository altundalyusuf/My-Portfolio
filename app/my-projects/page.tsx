import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
    return (
        <div
            style={{ backgroundImage: "url(/mountains.jpg)" }}
            className='w-screen h-screen flex flex-col items-center bg-center bg-cover overflow-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] xl:max-w-[70%] mt-44 md:mt-28 mb-28 overflow-auto'>
                {Projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        text={project.text}
                        image={project.src}
                    />
                ))}
            </div>
        </div>
    )
}

export default Page
