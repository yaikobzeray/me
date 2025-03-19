import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <div className='bg-[#021636] text-white flex w-full max-w-screen-xl justify-center items-center'>
     <div className='flex items-center gap-3 flex-col'>
     <img src="./personal-logo.svg" alt="" className='h-8 w-auto my-3'/>
     <div className='flex gap-2'>
        <a target='_blank' href="https://www.linkedin.com/in/yaikob-zeray"><FaLinkedin className='h-6 w-auto'/></a>
        <a target='_blank' href="https://www.instagram.com/yaikobzeray"><FaInstagram className='h-6 w-auto'/></a>
        <a target='_blank' href="https://t.me/yaikobzeray"><FaTelegramPlane className='h-6 w-auto'/></a>
        <a target='_blank' href="https://github.com/yaikobzeray/Yaikob-Zeray"><FaGithub className='h-6 w-auto'/></a>
     </div>
     <p className='text-sm'>Copyright © 2022 My Portfolio. All rights reserved.</p>
     </div>
    </div>
  )
}

export default Footer
