import { useEffect, useState, useRef } from "react";
import { FaBug, FaDatabase, FaMobile, FaPencilRuler, FaShoppingBag } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { SiFastapi } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { motion } from "framer-motion";

const Services = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    {
      icon: <TfiWorld size={48} />,
      title: "Responsive Web Design",
      description:
        "I create fully responsive web designs that adapt seamlessly to all screen sizes and devices, ensuring a smooth and user-friendly experience.",
    },
    {
      icon: <FaPencilRuler size={48} />,
      title: "Interactive UI Development",
      description:
        "I build interactive and user-friendly interfaces with smooth animations and dynamic elements, focusing on creating seamless user experiences.",
    },
    {
      icon: <SiFastapi size={48} />,
      title: "REST API Development",
      description:
        "I develop secure and scalable REST APIs that enable seamless communication between applications.",
    },
    {
      icon: <FaDatabase size={48} />,
      title: "Database Architecture",
      description:
        "I design efficient and scalable database architectures to ensure optimized data storage, fast retrieval, and high performance.",
    },
    {
      icon: <FaMobile size={48} />,
      title: "Progressive Web Apps",
      description:
        "I develop Progressive Web Apps that deliver fast, reliable, and engaging user experiences.",
    },
    {
      icon: <FaShoppingBag size={48} />,
      title: "E-Commerce Applications",
      description:
        "I build scalable and secure e-commerce applications with seamless user experiences, featuring product management, secure payment integration, and optimized performance.",
    },
    {
      icon: <FaBug size={48} />,
      title: "Maintenance & Bug Fixes",
      description:
        "I provide ongoing maintenance and bug fixing services to ensure websites and applications run smoothly.",
    },
    {
      icon: <MdSecurity size={48} />,
      title: "Authentication & Security",
      description:
        "I implement secure authentication systems and data protection measures to safeguard applications.",
    },
    {
      icon: <FaChartSimple size={48} />,
      title: "Website Performance Optimization",
      description:
        "I optimize website performance to deliver faster load times, improved SEO, and a seamless user experience.",
    },
  ];

  return (
    <motion.div ref={containerRef} initial="hidden"  animate={mounted ? "visible" : "hidden"} variants={fadeInUp} className="w-full px-6 py-8 flex flex-col items-center gap-y-10 ">
      <motion.h2 initial={{ opacity: 0, y: -50 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-transparent bg-clip-text text-5xl font-bold text-center" > Services</motion.h2>

      <div className="container mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={index} initial="hidden" animate={mounted ? "visible" : "hidden"} variants={fadeInUp} transition={{ delay: index * 0.1 }} className="group flex flex-col justify-between items-center text-center p-6 rounded-xl shadow-lg bg-gray-800/50 backdrop-blur-lg hover:shadow-2xl hover:scale-105 text-white duration-300" >
              <div className="mb-4 text-indigo-400 group-hover:text-white">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-sm leading-relaxed text-gray-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;