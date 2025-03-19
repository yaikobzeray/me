import React from 'react';
import { BsLightningCharge } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";

function About() {
    return (
        <div  id="about" className='flex overflow-hidden bg-[#021636] items-center justify-center align-middle md:py-30'>
            <div className='py-30 lg:py-0 flex w-screen max-w-screen-xl justify-center items-center align-middle overflow-hidden'>
                <img src="./about.png" className='hidden lg:block object-cover ' style={{ width: "auto", height: 480 }} alt="" />
                <div className='flex flex-col gap-2 px-10'>
                    <h4 className='text-[#E64154] text-lg'>About Me</h4>
                    <h2 className='lg:w-100 button text-white text-3xl lg:text-4xl'>Turning Ideas into Reality through Code!</h2>
                    <p className='text-white text-sm lg:text-[12px] lg:w-150'>I am focusing on becoming proficient in full-stack development for both mobile and web applications, with a strong emphasis on UI/UX design. By mastering both the front-end and back-end aspects of app development, I aim to build seamless, high-performance applications that not only function well but also deliver exceptional user experiences.</p>
                    <div className='mt-5 flex flex-col md:flex-row gap-6 justice-center align-middle items-start'>
                        <div className='flex flex-col gap-2'>
                            <div className='h-15 w-15 bg-[#E64154] flex rounded-full justify-center items-center'>
                                <BsLightningCharge className='text-white h-8 w-8 ' />
                            </div>
                            <h3 className='button text-2xl font-medium text-white'>My Ambition</h3>
                            <p className='w-80 text-white text-md  lg:text-[14px]'>I aim to establish my own software development company and advance my skills by embracing new technologies and leading innovative projects.</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='h-15 w-15 bg-[#E64154] flex rounded-full justify-center items-center'>
                                <FaLightbulb className='text-white h-8 w-8 ' />
                            </div>
                            <h3 className='button text-2xl font-medium text-white'>My Purpose</h3>
                            <p className='w-80 text-white text-md lg:text-[14px]'>My purpose is to create impactful software solutions that solve real-world problems, while continuously growing as a developer and entrepreneur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
