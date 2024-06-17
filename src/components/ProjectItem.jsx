import React from "react";

const ProjectItem = ({img, title, info}) => {
    return(
        <div >
            <p className="p-10 test-center py-8">
                {info}
            </p>
            <div className="relative flex items-center justify-center h-auto w-[70%] shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
                <img src={img} alt="/" className="p-10 rounded-xl group-hover:opacity-10"/>
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h3 className="p-5 text-2xl font-bold text-white tracking-wider text-center">
                        {title}
                    </h3>
                    <a href="/">
                        <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer font-lg">More Info</p>
                    </a>
                </div>
            </div>
           

        </div>
    )
}

export default ProjectItem