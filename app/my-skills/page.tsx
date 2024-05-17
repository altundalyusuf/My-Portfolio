"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SkillData } from '@/constants'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'

const Page = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSlidesPerView(5);
            } else if (window.innerWidth >= 640) {
                setSlidesPerView(4);
            } else if (window.innerWidth >= 480) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 320) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        handleResize(); // Call the function once to set the initial state
        window.addEventListener('resize', handleResize); // Update state whenever the window size changes

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

    return (
        <div
            style={{ backgroundImage: `url('/bg-2.jpg')` }}
            className='h-screen w-screen flex items-center justify-center bg-cover bg-center'>
            <div className='flex flex-col gap-14 md:gap-20 max-w-[80%] max-h-[70%]  text-center items-center'>
                <div className='flex flex-col items-center gap-4'>
                    <h1 className='font-semibold text-white text-[35px] md:text-[50px]'>Skills
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>{" "}
                            &
                            {" "}
                        </span>
                        Technologies
                    </h1>
                    <p className='text-gray-400 text-[15px] md:text-[20px]'>
                        Using the latest tech this world has to offer
                    </p>
                </div>
                <Swiper
                    slidesPerView={slidesPerView}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false
                    }}
                    speed={5000}
                    spaceBetween={10}
                    modules={[Autoplay]}
                    className='max-w-[50%] sm:max-w-[60%] md:max-w-[80%]'
                >
                    {SkillData.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex items-center justify-center'>
                                <Image
                                    src={skill.Image}
                                    alt={skill.name}
                                    width={skill.width}
                                    height={skill.height}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    slidesPerView={slidesPerView}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                    speed={5000}
                    spaceBetween={10}
                    modules={[Autoplay]}
                    className='max-w-[50%] sm:max-w-[60%] md:max-w-[80%]'
                >
                    {SkillData.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex items-center justify-center'>
                                <Image
                                    src={skill.Image}
                                    alt={skill.name}
                                    width={skill.width}
                                    height={skill.height}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    )
}

export default Page
