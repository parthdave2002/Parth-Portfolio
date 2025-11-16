import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaInstagram, FaLinkedinIn, FaCheck } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const DownloadPDfcall = () => {
    const pdfUrl = "/Parth_Dave_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Parth_Dave_Resume.pdf"; // specify the filename only
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen w-full px-6 py-16 flex flex-col items-center ">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-transparent bg-clip-text text-5xl font-bold text-center"
      >
        About Me
      </motion.h2>
     
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-6xl">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-transparent">
          {/* Left content */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">Passionate &amp; Developer<br />Web Designer</h1>

            <p className="mt-4 text-gray-300 max-w-xl">I’m Parth Dave, a Web Developer who writes code, fixes bugs, and sometimes even sleeps 😴.</p>

            <ul className="mt-4 space-y-2 max-w-lg">
              <li className="flex items-start gap-3 text-gray-300">
                <FaCheck className="text-indigo-400 mt-1" />
                <span>  I build fast and responsive web apps using modern tech — and I even make them look good (my code, not my face 😄).</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FaCheck className="text-indigo-400 mt-1" />
                <span>If you like clean code, good vibes, and someone who doesn’t run away from merge conflicts… we’ll get along great 🤝💙.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FaCheck className="text-indigo-400 mt-1" />
                <span>When I’m not coding, I’m probably debugging my life decisions or searching for that missing semicolon ; 🤦‍♂️  <br /> Bugs fixed? Infinity ♾️.  Bugs created? Also infinity ♾️😂</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button onClick={DownloadPDfcall} className="inline-flex items-center gap-3 bg-indigo-400 text-black font-semibold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition">
                <FaDownload />
                <span>Download Resume</span>
              </button>

    
            </div>
          </motion.div>

          {/* Right profile card */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex justify-center md:justify-end">
            <div className="w-80 bg-gradient-to-b from-gray-900/80 to-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <div className="w-full h-80 overflow-hidden">
                <img src="/5154267.webp" alt="Parth" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-center bg-black/60">
                <h3 className="text-xl font-semibold text-white">Parth Dave</h3>
                <p className="text-gray-400 mt-1"> Software Developer</p>
              </div>
              <div className="p-4 justify-center text-center bg-black/60 flex gap-x-4 mt-1">
                <a href="https://github.com/parthdave2002/Parth-Portfolio" className="border border-indigo-500 hover:bg-indigo-500 text-indigo-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in p-2 cursor-pointer rounded-full"> <FaGithub className="text-[1rem] transition duration-150 ease-out hover:ease-out text-indigo-600 hover:text-gray-100" /> </a>
                <a href="https://www.linkedin.com/in/parth-dave-791100228/" className="border border-indigo-500 hover:bg-indigo-500 text-indigo-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in p-2 cursor-pointer rounded-full"> <FaLinkedinIn className="text-[1rem] transition duration-150 ease-out hover:ease-out text-indigo-600 hover:text-gray-100" /> </a>
                <a href="https://www.instagram.com/daveparth2604?igsh=YnU4enV3ZGZjaGNv" className="border border-indigo-500 hover:bg-indigo-500 text-indigo-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in p-2 cursor-pointer rounded-full"> <FaInstagram className="text-[1rem] transition duration-150 ease-out hover:ease-out text-indigo-600 hover:text-gray-100"/> </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
};

export default About;