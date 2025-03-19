import React from 'react'
import Header from './Header'
import { FaArrowCircleRight } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { PiAndroidLogoThin } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { FaDownload } from "react-icons/fa6";
import { Link } from 'react-scroll';


function Hore() {
  return (
    <div  id="home" className='py-30 px-5 md:py-0 md:px-10 flex flex-col bg-[#0F2343] items-center justify-center overflow-hidden'>
      <Header/>
      <div className='flex h-screen w-screen items-center justify-around max-w-screen-2xl overflow-hidden'>
        <div className=" hidden absolute inset-0 bg-radial from-[#5936e3ad] px-10  blur-3xl md:flex items-center justify-center h-80 w-80 my-30 overflow-hidden">
        </div>
        <div className='flex flex-col md:h-screen justify-center p-10 items-center md:items-start  gap-2.5 overflow-hidden'>
          <h2 className='text-white text-5xl md:text-7xl font-medium overflow-hidden'>Hi I'm Yaikob</h2>
          <h4 className='text-white md:text-left text-2xl md:text-3xl overflow-hidden '>Software Engineer</h4>
          <p className=' md:w-90 text-white text-center md:text-left fontFamily: "Poppins" overflow-hidden'>I specialize in full-stack mobile and web app development with a focus on creating intuitive, user-centric UI/UX designs.</p>
          <div className='flex flex-col md:flex-row gap-4 overflow-hidden '>
          <a href="/" download="./yaikob_zeray.pdf">  <button className='mt-3 cursor-pointer text-white flex justify-center items-center align-middle py-2 rounded-4xl button font-medium text-sm bg-[#E64154] overflow-hidden w-35'>My Resume <FaDownload className='ml-1 cursor-pointer hover:text-amber-300' /></button></a>
            <Link className='cursor-pointer'
                    to='contact'
                    smooth={true}
                    duration={500}
                  > <button className='mt-3 cursor-pointer text-white flex justify-center items-center align-middle py-2 rounded-4xl button font-medium text-sm bg-[#ffffff37] overflow-hidden w-35'>Contact Me<FaArrowCircleRight className='ml-1 hover:text-white text-[#E64154]' /></button></Link>
          </div>

          <CgWebsite className='overflow-hidden hidden md:block h-30 w-30 mt-120 ml-90 absolute text-[#ffffff28]' />
          <PiAndroidLogoThin className='overflow-hidden hidden md:block h-30 w-30 -mt-40 ml-100 absolute text-[#ffffff28]' />
          <IoSettingsOutline className='overflow-hidden hidden md:block h-40 w-40 mt-155 ml-30 absolute text-[#ffffff28] overflow-' />
          <IoCodeSlash className='hidden md:block h-20 w-20 mt-50 ml-120 absolute text-[#ffffff28]' />
        </div>
        <div style={{ backgroundImage: "url('./developer.png')", }} className='hidden lg:block hover:blur-xs hover:scale-105 hover:transition-all bg-cover h-100 w-140  my-20  bg-gradient overflow-hidden'>
          <div className='bg-gradient-to-t from-[#0F2343] from-2% h-100 w-140' ></div></div>


      </div>
    </div>
  )
}

export default Hore
