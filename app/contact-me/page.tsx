import ContactMe from '@/components/ContactMe'
import React from 'react'

const Page = () => {
    return (
        <div
            style={{ backgroundImage: `url('bg-3.jpg')` }}
            className='w-screen h-screen bg-cover bg-center flex items-center justify-center'>
            <div
                className='h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white overflow-hidden flex items-center justify-center'>
                <div
                    style={{ backgroundImage: `url('/atombg-comp.webp')` }}
                    className='absolute inset-0 bg-cover bg-center opacity-30 md:opacity-80'>
                </div>
                <div className='absolute md:left-20 w-[70%] md:w-[30%]'>
                    <ContactMe />
                </div>
            </div>
        </div>
    )
}

export default Page
