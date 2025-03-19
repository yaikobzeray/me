import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { TbSmartHome } from "react-icons/tb";
import { CgWorkAlt } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import { BsCompass } from "react-icons/bs";
import { VscCode } from "react-icons/vsc";
import { SiHyperskill } from "react-icons/si";
import { RiChatSmile2Line } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";

const navList = [
  { title: "Home", icon: BsCompass, id: "home" },
  { title: "About", icon: VscAccount, id: "about" },
  { title: "Experience", icon: SiHyperskill, id: "experience" },
  { title: "Services", icon: VscCode, id: "services" },
  { title: "Projects", icon: CgWorkAlt, id: "projects" },
  { title: "Contact", icon: RiChatSmile2Line, id: "contact" },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-64 bg-[#0F2343] text-white transform ${isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-5 flex justify-end">
        <button onClick={onClose} className="text-white text-2xl focus:outline-none">
          &times;
        </button>
      </div>
      <ul className="mt-10">
        {navList.map((item, index) => (
          <li
            key={index}
            className="p-4 hover:bg-[#2A3757] hover:text-[#E64154] cursor-pointer"
          >
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              onClick={onClose} // Close sidebar on click
              className="flex items-center gap-3"
            >
              <item.icon className="text-xl" />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex px-5 md:px-20 w-screen bg-[#0F2343] justify-between align-middle max-w-screen-xl mx-auto overflow-hidden fixed top-0 z-40">
        <div className="flex justify-center items-center m-2 w-13 h-13 bg-[#2A3757]">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-[#E64154] cursor-pointer"
          >
            <img src="./personal-logo.svg" alt="" className='h-8 w-auto' />
          </Link>
        </div>
        <div className="flex align-middle items-center">
          <nav className="flex text-white">
            <ul className="md:flex gap-6 font-bold text-white hidden">
              {navList.map((item, index) => (
                <li
                  key={index}
                  className="text-white hover:cursor-pointer hover:text-[#E64154]"
                >
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    className="hover:text-[#E64154]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <CgDetailsMore
              onClick={toggleSidebar}
              className="md:hidden h-8 w-8 cursor-pointer"
            />
          </nav>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
}

export default Header;