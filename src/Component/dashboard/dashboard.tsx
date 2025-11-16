import { useEffect } from "react";
import Profile from "../../../public/My_photo.jpeg";
import BlurText from "../common/blurtext";

const Dashboard = () => {

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

                <div className="max-w-4xl">
                  <BlurText
                      text="Welcome to my Portfolio !!"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      // onAnimationComplete={handleAnimationComplete}
                      className="text-indigo-400 text-4xl lg:text-5xl font-bold text-gray-50 leading-tight mb-4"
                    />
                    
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-50 leading-tight"> Hi — I’m <span className="text-indigo-400">Parth Dave</span>.<br/>  I design & build user-friendly websites. </h1>
                    <BlurText
                      text=" Web designer & developer from India with 3.5+ years of experience. I create responsive, accessible, and performance-focused websites that help businesses grow. "
                      delay={200}
                      animateBy="words"
                      direction="top"
                      // onAnimationComplete={handleAnimationComplete}
                      className="mt-4 text-lg text-gray-200"
                    />

                  {/* <div className="mt-6 flex gap-4">
                    <a href="#projects" className="px-5 py-3 rounded-2xl bg-indigo-500 text-white font-medium shadow">  View Projects </a>
                    <a href="#contact" className="px-5 py-3 rounded-2xl border border-indigo-500 text-indigo-200">  Let’s Talk  </a>
                  </div> */}
                </div>
                {/* <div className="flex gap-x-4 mt-4">
                    <a href="https://github.com/parthdave2002/Parth-Portfolio" className="border border-indigo-500 hover:bg-indigo-500 text-indigo-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in p-2 cursor-pointer rounded-full"> <FaGithub className="text-[1rem] transition duration-150 ease-out hover:ease-out text-indigo-600 hover:text-gray-100"/> </a>
                    <a href="https://www.linkedin.com/in/parth-dave-791100228/" className="border border-indigo-500 hover:bg-indigo-500 text-indigo-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in p-2 cursor-pointer rounded-full"> <FaLinkedinIn className="text-[1rem] transition duration-150 ease-out hover:ease-out text-indigo-600 hover:text-gray-100"/> </a>
                     <a href="https://www.instagram.com/daveparth2604?igsh=YnU4enV3ZGZjaGNv" className="border border-indigo-500 hover:bg-indigo-500 text-indigo-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in p-2 cursor-pointer rounded-full"> <FaInstagram className="text-[1rem] transition duration-150 ease-out hover:ease-out text-indigo-600 hover:text-gray-100"/> </a> 
                </div> */}
            </div>

            <div className="flex justify-center">
              <div> <img src={Profile} className="object-cover w-96 lg:w-[20rem]  lg:h-[20rem] border-2 border-indigo-800 hover:border-indigo-500 transform skew-y-3 hover:skew-y-0 delay-300 duration-700 ease-in-out rounded-[3rem] rotate-[5deg] hover:rotate-[0deg] shadow shadow-lg shadow-blue-500/40 p-1"  alt="profile photo" />  </div>
            </div>
          </div>
     </div>
    </>
  );
}

export default Dashboard;