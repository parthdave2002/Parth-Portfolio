import { useEffect } from "react";

const Project = () => {

  useEffect(() =>{
    window.scrollTo({
      top: 0, // Subtract the offset value from the section's top position
      behavior: 'smooth',
    });
  },[])

  return (
    <>
      <div className="min-h-screen w-screen px-6 py-6 ">
        <div className="flex flex-col gap-y-6 ">
          <div className="self-center flex justify-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold underline-animation"> Projects </div>
 
          <div className="text-gray-100 flex flex-col gap-y-6">
            <div>
              <div className=" md:flex justify-between">
                <div className="text-[1.2rem] md:text-[1.3rem] font-semibold"> Software Developer | CMARIX.   </div>
                <div className="mt-2 md:mt-0"> Oct 2024 – Current </div>
              </div>
              <div className="md:flex gap-x-3 mt-2 md:mt-0"> <div className="text-[1rem]"> Skills and Tools : </div> React, Tailwindcss, Redux-toolkit, Gitlab </div>

              <div className="my-6 flex flex-col gap-y-2">
                <div className="text-[1.2rem] font-bold"> Purple PRN : On-Demand Healthcare Shift Portal</div>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>
              </div>

              <div className="my-6 flex flex-col gap-y-2">
                <div className="text-[1.2rem] font-bold"> Datebook AI : Online Dating Application </div>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>
              </div>
            </div>

            <div>
              <div className="md:flex justify-between">
                <div className="text-[1.2rem] md:text-[1.3rem] font-semibold"> Software Developer | Agrovikas Agritech PVT LTD.   </div>
                <div className="mt-2 md:mt-0"> May 2023 – Oct 2024 </div>
              </div>
              <div className="md:flex gap-x-3 mt-3 md:mt-0"> <div className="text-[1rem]"> Skills and Tools : </div> HTML, CSS, JavaScript, React, React-Bootstrap, React-Redux, Redux-Saga, Bit bucket, Jira </div>
              <div className="my-3 flex flex-col gap-y-2">
                <div className="text-[1.2rem] font-bold"> CRM With Dialer :  </div>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>
              </div>
            </div>

            <div>
              <div className="md:flex justify-between">
                <div className="text-[1.3rem] font-semibold"> Software Developer | Avanzar solution. </div>
                <div> May 2022 – May 2023 </div>
              </div>
              <div className="md:flex gap-x-3 mt-3 md:mt-0"> <div className="text-[1rem]"> Skills and Tools : </div> HTML, CSS, JavaScript, React, React-Bootstrap, React-Redux, Redux-Saga, Bit bucket, Jira </div>
              <div className="my-6 flex flex-col gap-y-2">
                <div className="text-[1.2rem] font-bold"> ETIMS :  </div>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>
              </div>

              <div className="my-6 flex flex-col gap-y-2">
                <div className="text-[1.2rem] font-bold"> Karmabees : Online Dating Application </div>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
                <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <div className="text-[1.2rem] md:text-[1.3rem] font-semibold"> Freelancer </div>
              </div>
              <div className="md:flex gap-x-3 mt-3 md:mt-0"> <div className="text-[1rem]"> Skills and Tools : </div>  MERN </div>
              <div className="my-3 flex flex-col gap-y-2">
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
                <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;