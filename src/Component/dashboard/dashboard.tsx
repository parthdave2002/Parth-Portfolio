import Profile from "../../../public/My_photo.jpeg";
import {  FaGithub, FaLinkedinIn } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
     <div className="w-screen lg:h-screen py-3 lg:py-[5rem] bg-[#0f0715] flex flex-col justify-around">
          <div className="lg:flex justify-around px-6 py-6">
            <div className="py-6 gap-y-3">
                <div className="text-gray-50 text-[1.5rem] font-bold">HI,I am Parth Dave</div>
                <div className="bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-100 text-transparent inline-block bg-clip-text text-[3.5rem] lg:text-[4.5rem] font-bold leading-tight"> Web Developer </div>
                <div className="text-gray-50 text-[1.5rem] text-wrap break-words lg:w-[34rem]"> I break down complex user experience problems to create integrity focussed solutions that connect billions of people </div>
                <div className="flex gap-x-4 mt-4">
                    <a href="https://github.com/parthdave2002/Parth-Portfolio" className="border border-indigo-500 hover:bg-indigo-500 text-indigo-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in p-2 cursor-pointer rounded-full"> <FaGithub className="text-[1rem] transition duration-150 ease-out hover:ease-out text-indigo-600 hover:text-gray-100"/> </a>
                    <a href="https://www.linkedin.com/in/parth-dave-791100228/" className="border border-indigo-500 hover:bg-indigo-500 text-indigo-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in p-2 cursor-pointer rounded-full"> <FaLinkedinIn className="text-[1rem] transition duration-150 ease-out hover:ease-out text-indigo-600 hover:text-gray-100"/> </a>
                    {/* <a href="https://www.instagram.com/" className="border border-indigo-500 hover:bg-indigo-500 text-indigo-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in p-2 cursor-pointer rounded-full"> <FaInstagram className="text-[1rem] transition duration-150 ease-out hover:ease-out text-indigo-600 hover:text-gray-100"/> </a> */}
                </div>
            </div>

            <div className="flex justify-center">
              <div> <img src={Profile} className="object-cover w-96 lg:w-[20rem]  lg:h-[20rem] border-2 border-indigo-800 hover:border-indigo-500 transform skew-y-3 hover:skew-y-0 delay-300 duration-700 ease-in-out rounded-[3rem] rotate-[5deg] hover:rotate-[0deg] shadow shadow-lg shadow-blue-500/40 p-1"  alt="profile photo" />  </div>
            </div>
          </div>
          
          <div className="lg:flex justify-around px-[2rem] py-[2rem]">
            <div className="rounded-md flex gap-x-3 text-center self-center text-gray-100 ">
              <div className="text-[3.2rem] lg:text-[4.5rem] font-bold"> 2.5</div>
              <div className="self-center text-[1rem] lg:text-[1.2rem] font-semibold leading-6 text-left"> Years of <br /> Experience </div> 
            </div>
            <div className="rounded-md flex gap-x-3 text-center self-center text-gray-100 ">
              <div className="text-[3.2rem] lg:text-[4.5rem] font-bold"> 03 </div>
              <div className="self-center text-[1rem] lg:text-[1.2rem] font-semibold leading-6 text-left"> Project <br /> Completed </div> 
            </div>
            <div className="rounded-md flex gap-x-3 text-center self-center text-gray-100 ">
              <div className="text-[3.2rem] lg:text-[4.5rem] font-bold"> 01</div>
              <div className="self-center text-[1rem] lg:text-[1.2rem] font-semibold leading-6 text-left">  Current <br /> Project </div> 
            </div>
          </div>
     </div>
    </>
  );
}

export default Dashboard;