/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    // Home Page
    <main className='w-screen h-screen relative'>
      {/* Desktop */}
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{ backgroundImage: "url(/main-bg.webp)" }}>
        <div className='pl-5 pr-3 sm:pl-20 lg:pl-24 xl:pl-40 pb-56 md:pb-20 flex flex-col items-center md:items-start gap-5 z-[10] max-w-[750px]'>
          <h1 className='text-[37px] md:text-[50px] text-white font-semibold text-center md:text-left'>
            Make anything possible with
            <br className='md:hidden' />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>{" "}
              Web Development
            </span>
          </h1>
          <div className='hidden md:block'>
            <p className='text-gray-200 mb-2'>Hello there !</p>
            <p className='text-gray-200'>
              I'm a <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-400 font-bold'>Computer Engineer & Software Developer</span> fluent in English, specializing in <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500 font-bold'>Frontend Development</span> with <span className='font-bold text-blue-400'>React</span>. With diverse experience spanning business analysis, server virtualization, and SAP ABAP development, I bring a unique perspective to my work.
            </p>
            <p className='text-gray-200 mt-2'>Let's create something extraordinary together.</p>
          </div>
          <div className='flex-col md:flex-row hidden md:flex gap-5'>
            <Link href="/my-skills" className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]' >
              Learn more
            </Link>
            <Link href="/my-projects" className='rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]' >
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
              My Projects
            </Link>
            <Link href="/contact-me" className='rounded-[20px] group relative bg-transparent border border-white  px-5 py-3 text-lg text-white max-w-[200px]' >
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='absolute flex bottom-20 z-[20] left-5 flex-col md:hidden gap-5'>
        <Link href="/my-skills" className='rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]' >
          Learn more
        </Link>
        <Link href="/my-projects" className='rounded-[20px] group bg-transparent border border-white  px-5 py-3 text-lg text-white max-w-[200px]' >
          My Projects
        </Link>
        <Link href="/contact-me" className='rounded-[20px] group bg-transparent border border-white  px-5 py-3 text-lg text-white max-w-[200px]' >
          Contact me
        </Link>
      </div>

      {/* Background Images */}
      <div className='absolute bottom-28 xl:bottom-1/4 right-0 z-[10]'>
        <div className='h-[130px] w-[130px] sm:h-[200px] sm:w-[200px] lg:h-[300px] lg:w-[300px] absolute top-16 sm:top-28 md:top-28 lg:top-40'>
          <Image
            src="/horse.png"
            alt='horse'
            height={300}
            width={300}
          />
        </div>

        <div className='w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] lg:h-[480px] lg:w-[480px]'>
          <Image src="/cliff.webp" alt='cliff' width={480} height={480}
          />
        </div>
      </div>

      <div className='absolute bottom-0 z-[5] w-full h-auto'>
        <Image
          src='/trees.webp'
          alt='trees'
          width={2000}
          height={2000}
          className='w-full h-full'
        />
      </div>
      <Image
        src="/stars.png"
        alt='stars'
        height={300}
        width={300}
        className='absolute top-0 left-0 z-[10]'
      />
    </main>
  )
}
