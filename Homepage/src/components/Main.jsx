import React from "react";
import {TypeAnimation} from "react-type-animation";
import {FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaSquareThreads} from "react-icons/fa6";

// Background settings
const Main = () => {
    return(
        <div id="main">
            <img className='w-full h-screen object-cover object-center' src='/src/assets/future-with-ai.png' />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center ld:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>
                    Company Names
                </h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                    In here
                    <TypeAnimation
                        sequence={[
                            'Slogan',
                            1000, 
                            'or',
                            1000,
                            'Policy ',
                            1000,
                            'or',
                            1000,
                            'Nothing',
                            1000,
                        ]}
                        wrapper="div"
                        speed={50}
                        style={{ fontSize: '1em', display: 'inline-block' , paddingLeft: '5px'}}
                        repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaInstagram className="cursor-pointer" size={20}/>
                    <FaFacebook className="cursor-pointer" size={20}/>
                    <FaXTwitter className="cursor-pointer" size={20}/>
                    <FaSquareThreads className="cursor-pointer" size={20}/>
                    <FaYoutube className="cursor-pointer" size={20}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main