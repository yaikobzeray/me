import React, { useState, useEffect } from 'react';
import ReactPaginate from "react-paginate";
import ReadMoreReact from 'read-more-react/dist/components/ReadMoreReact';

const items = [
  { image: './power_ethiopia.png', title: 'Power Ethiopia', description: 'Power Ethiopia provides learning opportunity about solar products and how to use them.with our experienced teachers it provides hands on tutorials and articles on how to use, maintain solar products.' },
  { image: './health.png', title: 'Healthpilot', description: 'HealthPilot is a platform for health assessment and private doctorconsultations. Users can communicate with doctors via chat and video calls. The system includes features such as health assessment results, a chatbot, and more.' },
  { image: './n-grocery.png', title: 'N-grocery', description: 'I’ve built a delivery app that connects customers, drivers, and vendors for seamless communication, real-time tracking with Google Maps, and secure payments. Drivers and vendors have wallets for easy earnings management and withdrawals.' },
  { image: './awura.png', title: 'Owl Events', description: 'I’m participating on an application called Owl Events. The main purpose of this app is connecting event organizers with participant. Participant can get tickets on online.' },
  { image: './easy.png', title: 'Easy Exam', description: 'Easy Exam features a Flutter front end and Node.js backend, allowing users to sign up with email or Gmail, save, rate, and answer exam questions. It includes profile management, Chapa payment integration, and filtering for top-rated questions, grades, chapters, repeated questions, and questions for today.' },
  { image: './trip.png', title: 'Tripmate Degitals', description: 'Tripmate is a digital tourism management system for the Gamo Tourism Bureau. It offers app and web versions with features like booking, ecommerce, tour management, blogs, and tourist information, plus analytics for the bureau.' },
];
function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); 


  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);
  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  return (
    <div id="projects" className='bg-[#021636] justify-center overflow-hidden flex bg py-20 items-center '>
      <div className='max-w-screen-xl flex items-center gap-4 flex-col overflow-hidden'>
        <h4 className='text-[#E64154]'>Portfolio</h4>
        <h1 className='text-4xl button text-white'>Meet My Projects</h1>
        <div>
          <div className='flex flex-col md:flex-row gap-4 mt-4'>
            {currentItems.map((item) => (
              <div key={`${item.title}-${currentPage}`} className='w-80 h-full bg-[#1B2D4D] flex flex-col gap-3 rounded-sm p-4 overflow-hidden'>
                <img src={item.image} className='h-40 w-74 object-cover rounded-sm' alt="" />
                <h1 className='text-[#E64154]'>{item.title}</h1>
                {/* <p>{item.description}</p> */}
                <div className='text-white'>
                  <ReadMoreReact   text={item.description}
                    min={80}
                    ideal={130}
                    max={300}
                    readMoreText={<div className='w-full flex justify-end'>
                      <span
                        className="text-[#E64154] font-medium cursor-pointer hover:underline"
                      >
                        More
                      </span>
                    </div>} />
                </div>
              </div>
            ))}

          </div>
          <ReactPaginate
            className='text-white flex gap-2 cursor-pointer relative justify-end items-end mt-2'
            activeLinkClassName='text-[#E64154]'

            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={Math.ceil(items.length / itemsPerPage)}
            onPageChange={({ selected }) => setCurrentPage(selected)}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />

        </div>

      </div>
    </div>
  )
}

export default Portfolio
