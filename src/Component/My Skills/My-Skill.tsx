import { useState } from "react";
import {FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTypescript  } from "react-icons/si";
import { RiTailwindCssLine, RiJavascriptFill  } from "react-icons/ri";

const MySkill = () => {
  return (
    <>
      <div className="w-screen px-6 py-6 self-center text-center">
        <div className="py-6">
            <div className="self-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold"> My Skills </div>
            <div className="self-center content-center text-left lg:text-center text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap"> We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-8 gap-x-6 lg:px-[10rem] bg-[#1c1425] py-3">
            <div className="p-4">  <div className="flex justify-center"> <FaHtml5 className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-orange-600" /></div> <div className="text-gray-100 text-[1.3rem] font-semibold"> HTML & CSS </div> </div>
            <div className="p-4">  <div className="flex justify-center"> <RiTailwindCssLine className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-blue-600" /></div> <div className="text-gray-100 text-[1.3rem] font-semibold"> Tailwind CSS </div>  </div>
            <div className="p-4">  <div className="flex justify-center"> <RiJavascriptFill  className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-yellow-600" /></div> <div className="text-gray-100 text-[1.3rem] font-semibold"> Javascript </div>  </div>
            <div className="p-4">  <div className="flex justify-center"> <SiTypescript  className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-blue-600 " /></div> <div className="text-gray-100 text-[1.3rem] font-semibold"> Typescript </div>  </div>
            <div className="p-4">  <div className="flex justify-center"> <FaReact className="self-center text-[3rem] font-normal text-center text-gray-600  hover:fill-indigo-600" /></div> <div className="text-gray-100 text-[1.3rem] font-semibold"> React.js </div>  </div>
            <div className="p-4">  <div className="flex justify-center"> <FaNodeJs className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-green-600" /></div>  <div className="text-gray-100 text-[1.3rem] font-semibold"> Node.js </div> </div>
            <div className="p-4">  <div className="flex justify-center"> <SiExpress className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-gray-200" /></div> <div className="text-gray-100 text-[1.3rem] font-semibold"> Express.js </div>  </div>
            <div className="p-4">  <div className="flex justify-center"> <SiMongodb className="self-center text-[3rem] font-normal text-center text-gray-600 hover:fill-green-600" /></div> <div className="text-gray-100 text-[1.3rem] font-semibold"> Mongodb</div>  </div>
        </div>
      </div>
    </>
  );
}

export default MySkill;