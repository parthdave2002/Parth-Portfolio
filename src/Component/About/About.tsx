import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen w-full px-4 py-12 flex flex-col gap-y-12 items-center">

      <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-transparent bg-clip-text text-5xl font-bold pb-5" > About Me  </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-lg"
      >
        <img
          src="/5154267.jpg"
          alt="Parth"
          className="w-64 h-64 rounded-xl object-cover shadow-xl hover:scale-105 transition-transform duration-500"
        />

        <div className="flex-1 text-gray-200 space-y-3">
          <h3 className="text-2xl font-semibold">Parth Dave</h3>
          <p className="text-gray-300">Software Developer with 3+ years of experience building modern web applications.</p>

          <ul className="space-y-2">
            <li className="flex items-center gap-2"><FaEnvelope className="text-indigo-400" /> daveparth2604@gmail.com</li>
            <li className="flex items-center gap-2"><FaPhone className="text-green-400" /> +91 9904764781</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-400" /> Ahmedabad, Gujarat</li>
            <li className="flex items-center gap-2"><FaGraduationCap className="text-yellow-400" /> BCA</li>
            <li className="flex items-center gap-2"><FaBriefcase className="text-blue-400" /> 3+ years experience</li>
          </ul>
        </div>
      </motion.div>

      {/* Skills / About Description */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-6xl bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-lg text-gray-200"
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          I am a passionate Software Developer skilled in building scalable, efficient, and user-friendly applications.
          I focus on writing clean, maintainable code and delivering high-quality solutions that solve real-world problems.
        </p>
      </motion.div>
    </div>
  );
};

export default About;