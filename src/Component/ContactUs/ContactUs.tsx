import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contactItems = [
    {
      icon: <FaPhone size={32} />,
      title: "Phone",
      value: "+91 9904764781",
      link: "tel:+919904764781"
    },
    {
      icon: <FaEnvelope size={32} />,
      title: "Email",
      value: "daveparth2604@gmail.com",
      link: "mailto:daveparth2604@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt size={32} />,
      title: "Address",
      value: "Ahmedabad, Gujarat, India",
      link: "https://www.google.com/maps"
    }
  ];

  const socialLinks = [
    { icon: <FaGithub size={24} />, link: "https://github.com/parthdave2002", label: "GitHub" },
    { icon: <FaLinkedinIn size={24} />, link: "https://www.linkedin.com/in/parth-dave-791100228/", label: "LinkedIn" },
    { icon: <FaInstagram size={24} />, link: "https://www.instagram.com/daveparth2604?igsh=YnU4enV3ZGZjaGNv", label: "Instagram" }
  ];

  return (
    <div ref={containerRef} className="w-full min-h-screen px-6 py-16 flex flex-col items-center justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={mounted ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.8 }} 
        className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-transparent bg-clip-text text-5xl font-bold text-center mb-4"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-300 text-center max-w-2xl text-lg mb-16"
      >
        Have a project in mind or want to collaborate? I'd love to hear from you. Reach out through any of the following channels.
      </motion.p>

      <div className="w-full max-w-5xl">
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)" }}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-indigo-500/30 rounded-2xl p-8 text-center hover:border-indigo-500/60 transition duration-300 cursor-pointer backdrop-blur"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 group-hover:from-indigo-500/40 group-hover:to-purple-500/40 transition duration-300 text-indigo-400 group-hover:text-indigo-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-indigo-300 group-hover:text-indigo-200 font-medium transition duration-300">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={mounted ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-16"
        />

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
          
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={mounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:daveparth2604@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-purple-600 transition duration-300"
          >
            <FaEnvelope />
            <span>Send Me an Email</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;