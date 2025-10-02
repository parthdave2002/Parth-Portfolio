import React, { useEffect, useState, useRef } from "react";
import { FaBitbucket, FaGithub, FaGitlab, FaHtml5, FaJira, FaNodeJs, FaReact, FaTrello } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux, SiReduxsaga, SiTypescript } from "react-icons/si";
import { RiTailwindCssLine, RiJavascriptFill } from "react-icons/ri";
import { motion } from "framer-motion";

const MySkill = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillCard = (icon: JSX.Element, name: string) => (
    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center justify-center p-4 bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-lg transition-all duration-300" >
      <div className="text-5xl text-gray-400 hover:text-indigo-400">{icon}</div>
      <div className="mt-2 text-gray-200 font-medium">{name}</div>
    </motion.div>
  );

  return (
    <motion.div ref={containerRef} initial="hidden" animate={mounted ? "visible" : "hidden"} variants={fadeInUp} className="w-full px-6 py-8 flex flex-col items-center gap-y-10 ">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-transparent bg-clip-text text-5xl font-bold text-center"
      >
        My Skills
      </motion.h2>

      <div className="w-full max-w-7xl">
        <h3 className="text-2xl font-bold text-white mb-4">Basic Languages</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillCard(<FaHtml5 />, "HTML & CSS")}
          {skillCard(<RiTailwindCssLine />, "Tailwind CSS")}
          {skillCard(<RiJavascriptFill />, "JavaScript")}
          {skillCard(<SiTypescript />, "TypeScript")}
        </div>
      </div>

      <div className="w-full max-w-7xl">
        <h3 className="text-2xl font-bold text-white mb-4">Programming Frameworks</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillCard(<FaReact />, "React.js")}
          {skillCard(<FaNodeJs />, "Node.js")}
          {skillCard(<SiExpress />, "Express.js")}
          {skillCard(<SiMongodb />, "MongoDB")}
        </div>
      </div>

      <div className="w-full max-w-7xl">
        <h3 className="text-2xl font-bold text-white mb-4">State Management</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillCard(<SiRedux />, "Redux Toolkit")}
          {skillCard(<SiReduxsaga />, "Redux-Saga")}
        </div>
      </div>

      <div className="w-full max-w-7xl">
        <h3 className="text-2xl font-bold text-white mb-4">Task & Code Management</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skillCard(<FaJira />, "Jira")}
          {skillCard(<FaTrello />, "Trello")}
          {skillCard(<FaBitbucket />, "Bitbucket")}
          {skillCard(<FaGitlab />, "GitLab")}
          {skillCard(<FaGithub />, "GitHub")}
        </div>
      </div>

      <div className="w-full max-w-7xl">
        <h3 className="text-2xl font-bold text-white mb-4">AI Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skillCard(<img src="/Ai_ChatGPT.webp" alt="ChatGPT" className="w-10 h-10 filter brightness-0 invert" />, "ChatGPT")}
          {skillCard(<img src="/Ai_github.webp" alt="Github Copilot" className="w-10 h-10 filter brightness-0 invert" />, "Github Copilot")}
          {skillCard(<img src="/Ai_cursor.webp" alt="Cursor AI" className="w-10 h-10 text-white" />, "Cursor AI")}
        </div>
      </div>
    </motion.div>
  );
};

export default MySkill;