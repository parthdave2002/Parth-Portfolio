import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0, // Subtract the offset value from the section's top position
      behavior: 'smooth',
    });
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   console.log("calll")
  };

  return (
  <motion.div ref={containerRef} initial="hidden"  animate={mounted ? "visible" : "hidden"} variants={fadeInUp} className="w-full px-6 py-8 flex flex-col items-center gap-y-10 ">
      <motion.h2 initial={{ opacity: 0, y: -50 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-transparent bg-clip-text text-5xl font-bold text-center" > Contact Us</motion.h2>


      <div className="flex items-center justify-center ">
        <div className={`min-h-screen max-w-7xl w-full rounded-2xl shadow-lg flex flex-col lg:flex-row overflow-hidden transition-all duration-1000 ease-in-out will-change-transform will-change-opacity ${mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
          <div className=" text-white flex-1  flex flex-col justify-between ">
            <img src="/5154267.jpg" className="h-full" />
          </div>

          <div className="flex-1 p-8 bg-[#f4f4f4]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col  gap-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="First Name" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="Last Name" />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mail</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="your@email.com" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="Phone Number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 min-h-[100px]" placeholder="Write your message..." />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-[#8750f7] hover:bg-[#6c3fcf] text-white font-semibold rounded-lg px-8 py-3 text-lg transition-colors">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
     </motion.div>
  );
};

export default ContactUs;