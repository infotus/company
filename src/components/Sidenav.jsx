import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject } from 'react-icons/ai';
import {GrProjects} from 'react-icons/gr';

const Sidenav = () => {

    // Auto set navigation for mobile and desktop
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='fixed w-[7%] h-[7%] top-4 right-4 z-[99] md:hidden' />
            {
                nav ? (
                    // Mobile View
                    <div className='fixed w-[100%] h-[100%] bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4' >
                                Home
                            </span>
                        </a>
                        <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
                            <GrProjects size={20} />
                            <span className='pl-4' >
                                Project
                            </span>
                        </a>
                        <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4' >
                                Contact
                            </span>
                        </a>

                    </div>
                ) : (
                    // Desktop View
                    <div>

                    </div>
                )
            }
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col justify-center items-center'>
                    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome/>
                    </a>
                    <a href='#projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects/>
                    </a>
                    <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </a>
                </div>
            </div>


        </div>

    );
};

export default Sidenav;