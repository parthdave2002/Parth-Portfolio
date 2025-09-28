import React, { useEffect, useState } from "react";
import {FaBitbucket, FaGithub, FaGitlab, FaHtml5, FaJira, FaNodeJs, FaReact, FaTrello } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux, SiReduxsaga, SiTypescript  } from "react-icons/si";
import { RiTailwindCssLine, RiJavascriptFill  } from "react-icons/ri";


const MySkill = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Intersection Observer for animation on enter viewport
  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={containerRef} className={`w-screen px-6 py-10 self-center transition-all duration-1000 ease-in-out will-change-transform will-change-opacity ${mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
        <div className="pb-10 text-center">
          <h2 className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent bg-clip-text text-4xl md:text-5xl font-bold"> My Skills </h2>
        </div>
        
        <div className="md:flex gap-x-6 lg:px-[5rem] bg-[#1c1425] py-2">
            <div className="text-[1.3rem] lg:text-[2rem] text-center self-center text-white font-bold "> Basic Language : </div>
            <div className="p-3">  <div className="flex justify-center"> <FaHtml5 className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-orange-600" /></div> <div className="text-gray-100 text-[1rem] text-center "> HTML & CSS </div> </div>
            <div className="p-3">  <div className="flex justify-center"> <RiTailwindCssLine className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-blue-600" /></div> <div className="text-gray-100 text-[1rem] text-center "> Tailwind CSS </div>  </div>
            <div className="p-3">  <div className="flex justify-center"> <RiJavascriptFill  className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-yellow-600" /></div> <div className="text-gray-100 text-[1rem] text-center "> Javascript </div>  </div>
            <div className="p-3">  <div className="flex justify-center"> <SiTypescript  className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-blue-600 " /></div> <div className="text-gray-100 text-[1rem] text-center "> Typescript </div>  </div>
        </div>
       
        <div className="md:flex gap-x-6 lg:px-[5rem] bg-[#1c1425] py-2 mt-3">
           <div className="text-[1.3rem] lg:text-[2rem] text-center self-center text-white font-bold "> Programming Language : </div>
            <div className="p-3">  <div className="flex justify-center"> <FaReact className="self-center text-[3rem] font-normal text-center text-gray-600  hover:fill-indigo-600" /></div> <div className="text-gray-100 text-[1rem] text-center"> React.js </div>  </div>
            <div className="p-3">  <div className="flex justify-center"> <FaNodeJs className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-green-600" /></div>  <div className="text-gray-100 text-[1rem] text-center"> Node.js </div> </div>
            <div className="p-3">  <div className="flex justify-center"> <SiExpress className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-gray-200" /></div> <div className="text-gray-100 text-[1rem] text-center"> Express.js </div>  </div>
            <div className="p-3">  <div className="flex justify-center"> <SiMongodb className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-green-600" /></div> <div className="text-gray-100 text-[1rem] text-center"> Mongodb</div>  </div>
        </div>
       
        <div className="md:flex gap-x-6 lg:px-[5rem] bg-[#1c1425] py-2 mt-3">
           <div className="text-[1.3rem] lg:text-[2rem] text-center self-center text-white font-bold "> State Managment : </div>
            <div className="p-3">  <div className="flex justify-center"> <SiRedux className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-green-600" /></div>  <div className="text-gray-100 text-[1rem] text-center"> Redux-toolkit </div> </div>
            <div className="p-3">  <div className="flex justify-center"> <SiReduxsaga className="self-center text-[3rem] font-normal text-center text-gray-600  hover:fill-indigo-600" /></div> <div className="text-gray-100 text-[1rem] text-center"> Redux-saga </div>  </div>
        </div>

        <div className="md:flex gap-x-6 lg:px-[5rem] bg-[#1c1425] py-2 mt-3">
          <div className="text-[1.4rem] lg:text-[2rem] text-center self-center text-white font-bold "> Task & Code Management : </div>
          <div className="p-3">  <div className="flex justify-center"> <FaJira className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-green-600" /></div>  <div className="text-gray-100 text-[1rem] text-center"> Jira </div> </div>
          <div className="p-3">  <div className="flex justify-center"> <FaTrello className="self-center text-[3rem] font-normal text-center text-gray-600  hover:fill-indigo-600" /></div> <div className="text-gray-100 text-[1rem] text-center"> Trello </div>  </div>
          <div className="p-3">  <div className="flex justify-center"> <FaBitbucket className="self-center text-[3rem] font-normal text-center text-gray-600  hover:fill-indigo-600" /></div> <div className="text-gray-100 text-[1rem] text-center"> Bitbucket </div>  </div>
          <div className="p-3">  <div className="flex justify-center"> <FaGitlab className="self-center text-[3rem] font-normal text-center text-gray-600  hover:fill-indigo-600" /></div> <div className="text-gray-100 text-[1rem] text-center"> Gitlab </div>  </div>
          <div className="p-3">  <div className="flex justify-center"> <FaGithub className="self-center text-[3rem] font-normal text-center text-gray-600  hover:fill-indigo-600" /></div> <div className="text-gray-100 text-[1rem] text-center"> Gihhub </div>  </div>
        </div>

        <div className="gap-x-6 md:flex  lg:px-[8rem] bg-[#1c1425] py-3 mt-3">
           <div className="text-[1.3rem] lg:text-[2rem] text-center self-center text-white font-bold "> AI Tools : </div>
          <div className="p-4 group">
            <div className="flex justify-center"> <img src="/Ai_ChatGPT.webp" className="self-center w-10 h-10 transition duration-300 ease-in-out filter 
                   brightness-0 invert-[40%] sepia-[10%] saturate-[200%] hue-rotate-[200deg] 
                   group-hover:invert group-hover:brightness-0 group-hover:contrast-100 group-hover:saturate-0" /> </div>
            <div className="text-gray-100 text-[1rem]  text-center mt-2">ChatGPT</div>
          </div>
          <div className="p-4 group">
            <div className="flex justify-center"> <img src="/Ai_github.webp" className="self-center w-10 h-10 transition duration-300 ease-in-out filter 
                   brightness-0 invert-[40%] sepia-[10%] saturate-[200%] hue-rotate-[200deg] 
                   group-hover:invert group-hover:brightness-0 group-hover:contrast-100 group-hover:saturate-0" /> </div>
            <div className="text-gray-100 text-[1rem] text-center mt-2">Github Copilot</div>
          </div>
          <div className="p-4 group">
            <div className="flex justify-center"> <img src="/Ai_cursor.webp" className="self-center w-10 h-10 transition duration-300 ease-in-out filter group-hover:invert group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-270 group-hover:brightness-125 group-hover:contrast-125" /> </div>
            <div className="text-gray-100 text-[1rem] text-center mt-2">Cursor Ai</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkill;