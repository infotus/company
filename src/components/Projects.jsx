import React from "react";
import ProjectItem from "./ProjectItem";
import noeImg from '../assets/noe-talk.png';

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <div className="grid sm:grid-cols-1 gap-12">
                <ProjectItem 
                img={noeImg} 
                title="Noe-Talk"
                info={
                    "We are excited to announce the launch of our new AI Conversation feature Noe-bot, designed to enhance user interactions and streamline communication. This innovative tool leverages advanced artificial intelligence to provide real-time, intuitive responses, making it easier than ever to get the information you need."
                }
                />
            </div>
            <div className="grid sm:grid-cols-1 gap-12">
                <ProjectItem 
                img={noeImg} 
                title="Onedio"
                info={
                    "Our next project is Onedio. Real time translated voice call app."
                }
                />
            </div>
        </div>
    )
}

export default Projects