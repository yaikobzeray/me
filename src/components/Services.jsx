import React from 'react'
import { TbDeviceDesktopCode } from "react-icons/tb";
import { TbDeviceMobileCode } from "react-icons/tb";
import { CiPen } from "react-icons/ci";
import { VscDebugConsole } from "react-icons/vsc";

function Services() {
  return (
    <div id="services" className='flex justify-center bg-[#021636] items-center px-7 lg:px-20 overflow-x-hidden py-20'>
     <div className='h-min w-screen flex-col lg:flex-row flex max-w-screen-xl items-center lg:items-start justify-center align-middle'>
    <div className='flex flex-col gap-3'> 
    <h3 className='text-[#E64154] mb-5 lg:mb-0 text-lg'>
        Service
      </h3>
      <h1 className='w-90 h-80 text-white text-4xl hidden lg:block button'>Service Offer From Me</h1>
    </div>
    <div className='grid md:grid-cols-2 gap-3' >
      <div className='h-65 w-80 flex flex-col gap-2 justify-center bg-[#1B2D4D] text-white p-7' >
        <TbDeviceMobileCode className='h-20 w-20 stroke-1 text-[#E64154]'/>
        <h1 className='font-bold mt-5 '>Mobile App</h1>
        <p className='text-sm'>I create high-quality native and cross-platform mobile applications tailored to your design specifications, ensuring seamless performance and user experience.</p>

      </div>
      <div className='h-65 w-80 flex flex-col gap-2 justify-center bg-[#1B2D4D] text-white p-7' >
        <TbDeviceDesktopCode className='h-20 w-20 stroke-1 text-[#E64154]'/>
        <h1 className='font-bold mt-5 '>Web App</h1>
        <p className='text-sm'>I build dynamic and responsive frontends using React or vanilla JavaScript, translating your designs into interactive and engaging web experiences.</p>
      </div>
      <div className='h-65 w-80 flex flex-col gap-2 justify-center bg-[#1B2D4D] text-white p-7' >
        <CiPen className='h-20 w-20 text-[#E64154]'/>
        <h1 className='font-bold mt-5 '>UI/UX Design</h1>
        <p className='text-sm'>I craft intuitive and visually appealing UI/UX designs tailored to your needs, focusing on user-centered experiences that enhance functionality and aesthetics.</p>

      </div>
      <div className='h-65 w-80 flex flex-col gap-2 justify-center bg-[#1B2D4D] text-white p-7' >
        <VscDebugConsole className='h-20 w-20 text-[#E64154]'/>
        <h1 className='font-bold mt-5 '>Software Maintenance</h1>
        <p className='text-sm'>I maintain your mobile and web applications with high-quality, skilled expertise, ensuring optimal performance and reliability.</p>

      </div>
    
    </div>
     </div>
    </div>
  )
}

export default Services
