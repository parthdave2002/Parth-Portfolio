// import { useEffect } from "react";
// import { motion } from "framer-motion";

// const Project = () => {

//   useEffect(() =>{
//     window.scrollTo({
//       top: 0, // Subtract the offset value from the section's top position
//       behavior: 'smooth',
//     });
//   },[])

//   return (
//     <>
//       <div className="min-h-screen w-screen px-6 py-6 ">
//         <div className="flex flex-col gap-y-6 ">
//          <motion.h2
//   initial={{ opacity: 0, y: -50 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}
//   className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-transparent bg-clip-text text-5xl font-bold pb-5 text-center"
// >
//   Projects
// </motion.h2>
 
//           <div className="text-gray-100 flex flex-col gap-y-6">
//             <div>
//               <div className=" md:flex justify-between">
//                 <div className="text-[1.2rem] md:text-[1.3rem] font-semibold"> Software Developer | CMARIX.   </div>
//                 <div className="mt-2 md:mt-0"> Oct 2024 – Current </div>
//               </div>
//               <div className="md:flex gap-x-3 mt-2 md:mt-0"> <div className="text-[1rem]"> Skills and Tools : </div> React, Tailwindcss, Redux-toolkit, Gitlab </div>

//               <div className="my-6 flex flex-col gap-y-2">
//                 <div className="text-[1.2rem] font-bold"> Purple PRN : On-Demand Healthcare Shift Portal</div>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>
//               </div>

//               <div className="my-6 flex flex-col gap-y-2">
//                 <div className="text-[1.2rem] font-bold"> Datebook AI : Online Dating Application </div>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>
//               </div>
//             </div>

//             <div>
//               <div className="md:flex justify-between">
//                 <div className="text-[1.2rem] md:text-[1.3rem] font-semibold"> Software Developer | Agrovikas Agritech PVT LTD.   </div>
//                 <div className="mt-2 md:mt-0"> May 2023 – Oct 2024 </div>
//               </div>
//               <div className="md:flex gap-x-3 mt-3 md:mt-0"> <div className="text-[1rem]"> Skills and Tools : </div> HTML, CSS, JavaScript, React, React-Bootstrap, React-Redux, Redux-Saga, Bit bucket, Jira </div>
//               <div className="my-3 flex flex-col gap-y-2">
//                 <div className="text-[1.2rem] font-bold"> CRM With Dialer :  </div>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>
//               </div>
//             </div>

//             <div>
//               <div className="md:flex justify-between">
//                 <div className="text-[1.3rem] font-semibold"> Software Developer | Avanzar solution. </div>
//                 <div> May 2022 – May 2023 </div>
//               </div>
//               <div className="md:flex gap-x-3 mt-3 md:mt-0"> <div className="text-[1rem]"> Skills and Tools : </div> HTML, CSS, JavaScript, React, React-Bootstrap, React-Redux, Redux-Saga, Bit bucket, Jira </div>
//               <div className="my-6 flex flex-col gap-y-2">
//                 <div className="text-[1.2rem] font-bold"> ETIMS :  </div>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>
//               </div>

//               <div className="my-6 flex flex-col gap-y-2">
//                 <div className="text-[1.2rem] font-bold"> Karmabees : Online Dating Application </div>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'> <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between">
//                 <div className="text-[1.2rem] md:text-[1.3rem] font-semibold"> Freelancer </div>
//               </div>
//               <div className="md:flex gap-x-3 mt-3 md:mt-0"> <div className="text-[1rem]"> Skills and Tools : </div>  MERN </div>
//               <div className="my-3 flex flex-col gap-y-2">
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
//                 <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1rem] whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Project;


import { useEffect } from "react";
import { motion, Variants } from "framer-motion";

const projectList = [
  {
    projects: [
      {
        name: "Purple PRN : On-Demand Healthcare Shift Portal",
        skills: ["React", "Typescript", "TailwindCSS", "Redux Toolkit", "Gitlab"],
        points: [
          "Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates.",
          "Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript.",
          "Successfully integrated a dynamic menu WordPress.",
          "Created list modules and given access to roles.",
          "Implemented API bindings for seamless communication with the server.",
          "Proactively identified and resolved software bugs.",
          "Conducted weekly client demonstrations to showcase newly developed features."
        ]
      },
      {
        name: "DateBook AI : Online Dating Application",
         skills: ["React", "Typescript", "TailwindCSS", "Redux Toolkit", "Gitlab"],
        points: [
          "Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates.",
          "Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript.",
          "Successfully integrated a dynamic menu WordPress.",
          "Created list modules and given access to roles.",
          "Implemented API bindings for seamless communication with the server.",
          "Proactively identified and resolved software bugs.",
          "Conducted weekly client demonstrations to showcase newly developed features."
        ]
      },
      {
        name: "CRM With Dialer : customer relationship management system integrated with a calling solution",
         skills: ["React", "TailwindCSS", "Typescript", "Redux-Saga", "Node" , "MongoDB", "Trello"],
        points: [
          "Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates.",
          "Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript.",
          "Successfully integrated a dynamic menu WordPress.",
          "Created list modules and given access to roles.",
          "Implemented API bindings for seamless communication with the server.",
          "Proactively identified and resolved software bugs.",
          "Conducted weekly client demonstrations to showcase newly developed features."
        ]
      },
      {
        name: "KarmBees : Motivational social platform",
         skills: [ "HTML", "CSS", "Javascript", "React", "Redux-Saga", "Bit bucket", "Jira"],
        points: [
          "Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates.",
          "Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript.",
          "Successfully integrated a dynamic menu WordPress.",
          "Created list modules and given access to roles.",
          "Implemented API bindings for seamless communication with the server.",
          "Proactively identified and resolved software bugs.",
          "Conducted weekly client demonstrations to showcase newly developed features."
        ]
      },
      {
        name: "ETIMS : Employee Training Management System",
         skills: ["HTML", "CSS", "Javascript", "React", "Redux-Saga", "Bit bucket", "Jira"],
        points: [
          "Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates.",
          "Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript.",
          "Successfully integrated a dynamic menu WordPress.",
          "Created list modules and given access to roles.",
          "Implemented API bindings for seamless communication with the server.",
          "Proactively identified and resolved software bugs.",
          "Conducted weekly client demonstrations to showcase newly developed features."
        ]
      }
    ]
  }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Project = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen w-full px-4 py-12 flex flex-col gap-y-12 items-center">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-transparent bg-clip-text text-5xl font-bold pb-5"
      >
        Projects
      </motion.h2>

      {projectList.map((company, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 w-full max-w-7xl"
        >
          {company.projects.map((project, pIdx) => (
            <motion.div
              key={pIdx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-6"
            >
              <div className="text-lg font-bold mb-2 text-white">{project.name}</div>
              <div className="md:flex gap-x-3 mb-4 text-white">
            <div className="font-medium">Skills and Tools:</div>
            <div className="flex flex-wrap gap-2">
              {project?.skills.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  custom={sIdx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="self-center text-md text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
              <ul className="list-disc list-inside space-y-1 ml-4">
                {project.points.map((point, ptIdx) => (
                  <motion.li
                    key={ptIdx}
                    custom={ptIdx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-gray-300 text-sm"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Project;
