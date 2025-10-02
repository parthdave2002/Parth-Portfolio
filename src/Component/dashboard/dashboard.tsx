import { useEffect, useRef, useState } from "react";
import Profile from "../../../public/My_photo.jpeg";
import {  FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const Dashboard = () => {
    const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    window.scrollTo({
      top: 0, // Subtract the offset value from the section's top position
      behavior: 'smooth',
    });
  }, [])

  return (
    <>
     <div className="w-screen  py-10 lg:py-[3rem] bg-[#0f0715] flex flex-col justify-around">
          <div className="lg:flex justify-around px-6 py-10">
            <div className="py-6 gap-y-3">
                <div className="text-gray-50 text-[1.5rem] font-bold">HI,I am Parth Dave</div>
                <div className="bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-100 text-transparent inline-block bg-clip-text text-[3.5rem] lg:text-[4.5rem] font-bold leading-tight"> Software Developer </div>
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
          
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeInUp}
          className="w-full px-6  flex flex-col items-center gap-y-10 
                 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400"
        >
          <div className="lg:flex justify-around px-[2rem] w-full max-w-6xl">
            {[
              { number: "03", text: "Years of Experience" },
              { number: "05", text: "Projects Completed" },
              { number: "02", text: "Current Project" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className=" backdrop-blur-md p-6 lg:p-8 flex gap-x-3 items-center justify-center text-center text-gray-100 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-[3.2rem] lg:text-[4.5rem] font-bold">
                  {stat.number}
                </div>
                <div className="self-center text-[1rem] lg:text-[1.2rem] font-semibold leading-6 text-left">
                  {stat.text.split(" ").map((line, i) => (
                    <span key={i}>
                      {line} <br />
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
     </div>
    </>
  );
}

export default Dashboard;