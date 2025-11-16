import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MyEducation = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

    const skills = [
    { name: "HTML", value: 85, color: "bg-orange-400" },
    { name: "Tailwind CSS", value: 85, color: "bg-purple-400" },
    { name: "Javascript", value: 80, color: "bg-yellow-400" },
    { name: "Typescript", value: 80, color: "bg-blue-400" },
    { name: "React JS", value: 90, color: "bg-purple-500" },
    { name: "Node JS", value: 50, color: "bg-green-500" },
    { name: "Express JS", value: 75, color: "bg-gray-500" },
    { name: "Mongodb", value: 50, color: "bg-green-500" },
    ];

    const education = [
    {
        year: "2019 - 2022",
        title: "BCA (Bachelor of Computer Applications)",
        place: "JG College of Computer Application",
    },
    {
        year: "2018 - 2019",
        title: "HSC (Higher Secondary School Certificate)",
        place: "Swaminarayan School",
    },
    {
        year: "2016 - 2017",
        title: "SSC (Secondary School Certificate)",
        place: "Rachna High School",
    },
    ];

    const experience = [
    {
        title: "REACT.JS DEVELOPER",
        year: "2024 - Curent",
        place: "CMARIX",
    },
    {
        title: "REACT.JS DEVELOPER",
        year: "2023-2024",
        place: "Agrovikas Agritech PVT LTD",
    },
    {
        title: "REACT.JS DEVELOPER",
        year: "2022 - 2023",
        place: "Avanzar Solution",
    },
   
    ];

  return (
    <>
      <motion.div ref={containerRef} initial="hidden" animate={mounted ? "visible" : "hidden"} variants={fadeInUp} className="w-full px-6 py-8 flex flex-col items-center gap-y-10 ">
        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-transparent bg-clip-text text-5xl font-bold text-center" > Education / Skills</motion.h2>

        <div className="w-full px-4 py-3 lg:flex lg:justify-between gap-10 ">
          <div className="lg:w-1/2 w-full">
            <div className="flex justify-center mb-6">
              <div className="px-6 py-2 text-lg font-medium border border-purple-500 rounded-lg bg-purple-500 text-white"> My Skills </div>
            </div>

            <div className="grid grid-cols-1  gap-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-200">{skill.name}</span>
                    <span className="font-medium text-gray-200">{skill.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${skill.color} h-2 rounded-full`}
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-10 lg:mt-0">

            <div className="flex justify-center mb-6">
              <button
                className={`px-6 py-2 text-lg font-medium border border-purple-500 rounded-l-lg ${activeTab === "experience" ? "bg-purple-500 text-white" : "bg-white text-purple-500"}`}
                onClick={() => setActiveTab("experience")} > Experience </button>
              <button className={`px-6 py-2 text-lg font-medium border border-purple-500 rounded-r-lg ${activeTab === "education" ? "bg-purple-500 text-white" : "bg-white text-purple-500"}`}
                onClick={() => setActiveTab("education")}>  Education  </button>
            </div>

            <div className="grid gap-6">
              {activeTab === "experience"
                ? experience.map((item, i) => (
                  <div key={i} className="bg-[#271639] text-white px-5 py-2 rounded-lg hover:bg-gradient-to-r from-[#271639] via-[#583683] to-[#8a55cd] transition">
                    <h4 className="text-[#8750f7] text-md font-semibold mb-1">{item.year}</h4>
                    <p className="text-xl font-bold">{item.place}</p>
                    <h3 className="text-sm">{item.title}</h3>
                  </div>
                ))
                : education.map((item, i) => (
                  <div key={i} className="bg-[#271639] text-white px-5 py-2 rounded-lg hover:bg-gradient-to-r from-[#271639] via-[#583683] to-[#8a55cd] transition">
                    <h4 className="text-[#8750f7] text-md font-semibold mb-1">{item.year}</h4>
                    <p className="text-xl font-bold">{item.place}</p>
                    <h3 className="text-sm">{item.title}</h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default MyEducation;