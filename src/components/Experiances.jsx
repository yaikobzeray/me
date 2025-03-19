import React from 'react'
import { useState } from 'react';
import { HiChevronDoubleRight } from "react-icons/hi";

var menuList = [{
    title: "Experiance", body: [
        {
            title: "MOBILE APP DEVELOPMENT",
            description: " Currently working as a Mobile App Developer at POWER ETHIOPIA. Developed and deployed a mobile app on the Play Store",
            duration: "Since 2024 - Present"
        },
        {
            title: "MOBILE APP DEVELOPMENT",
            description: "I completed internships as a Flutter developer working on Owlevents at Awura PLC, Agrivi at HBGB, and Health Pilot at Hermi Technology.",
            duration: "Since 2022 – 2023"
        },
        {
            title: " MERN STACK DEVELOPMEN",
            description: "I’m honing my skills at MERN Technologies while building a project called EasyExam.",
            duration: "Since 2024 – Present"
        },
        {
            title: " UI/UX DESIGNER",
            description: " I’ve worked as UI/UX designer during my internship period. and I’ve acquired massive experience. ",
            duration: "Since 2022 – 2023"
        },
    ]
}, { title: "Education",body:[
    {
        title: "Arbaminch University",
        description: "BSC IN SOFTWARE ENGINEERING",
        duration: "Since 2019 - 2024"
    },
    {
        title: "St. Marry University",
        description: "BA IN MANAGEMENT",
        duration: "Since 2023 – 2026"
    },
    {
        title: "FUNDAMENTALS OF DATA ANALYSIS FROM UDACITY",
        description: "",
        duration: "Since 2024 – 2024"
    },
    {
        title: "FUNDAMETAL OF PROGRAMMING FROM UDACITY",
        description: "",
        duration: "Since 2024 – 2024"
    },
] }, { title: "Skills",body:[

 {
        title: "Figma",
        description: "",
        duration: ""
    },
    {
        title: "Firebase",
        description: "",
        duration: ""
    },
    {
        title: "GIT",
        description: "",
        duration: ""
    },
    {
        title: "Jira",
        description: "",
        duration: ""
    },
] }]



function Experiances() {
    var [selectedMenuIndex, setIndex] = useState(0);


    return (
        <div id="experience" className='h-screen flex overflow-hidden bg-[#021636] justify-center items-center align-middle pt-40 md:pt-0'>
            <div className='w-screen items-center max-w-screen-xl align-middle justify-center '>
                <div className='w-scree items-stretch px-5 md:px-20 flex flex-col '>
                    <div className='flex justify-between '>
                        <h2 className='hidden  md:block w-100 text-white text-5xl'>
                            Inovating For A Better Tomorrow
                        </h2>
                        <div className='flex w-full md:w-94 gap-2 items-center align-middle'>
                            {menuList.map((item, i) =>
                                <button onClick={() => setIndex(i)} className={`py-2 px-3 rounded-4xl button font-medium text-sm hover:bg-[#E64154] hover:text-white ${selectedMenuIndex == i ? "bg-[#E64154] text-white" : "bg-[#FFF] text-[#E64154]"} overflow-hidden w-35`} key={i}>{item.title}</button>
                            )}

                        </div>
                    </div>
                    <hr className=' text-white my-10 ' />
                    <div className='w-screen max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-y-10 '>
                       
                    {
                        menuList[selectedMenuIndex].body.map((exp, index) =>(
                            <div key={index} className=''>
                            <div className='flex gap-3 justify-baseline'>
                                <HiChevronDoubleRight className='h-4 w-auto text-[#E64154]' />
                                <div>
                                    <h3 className='text-white font-bold'>{exp.title}</h3>
                                    <p className='text-white w-80 text-sm'>{exp.description}</p>
                                    <p className='text-white'>{exp.duration}</p>
                                </div>
                            </div>

                        </div>
                        )
                            
                        )
                    }
                        {/* <div className=''>
                            <div className='flex gap-3 justify-baseline'>
                                <HiChevronDoubleRight className='h-4 w-auto text-[#E64154]' />
                                <div>
                                    <h3 className='text-white'>Arbaminch Universtity</h3>
                                    <p className='text-white'>Bachelor Degree Of Software Engineering</p>
                                    <p className='text-white'>2019 - 2024</p>
                                </div>
                            </div>

                        </div> */}
                        {/* <div className=''>
                            <div className='flex gap-3 justify-baseline'>
                                <HiChevronDoubleRight className='h-4 w-auto text-[#E64154]' />
                                <div>
                                    <h3 className='text-white'>Arbaminch Universtity</h3>
                                    <p className='text-white'>Bachelor Degree Of Software Engineering</p>
                                    <p className='text-white'>2019 - 2024</p>
                                </div>
                            </div>
                        </div> */}

                    </div>


                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Experiances
