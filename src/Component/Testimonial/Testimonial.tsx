import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

interface TestimonialProp {
  id: number;
  name: string;
  date: string;
  message: string;
  rating: number;
  image: string;
}

const testimonials: TestimonialProp[] = [
  {
    id: 1,
    name: "Raju Poriya",
    date: "Frontend Developer",
    message: "Working with Parth was smooth and super productive. His code quality and attention to detail really stood out. Definitely someone you can rely on!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Devarshi Trivedi",
    date: "Frontend Developer",
    message:
      "Very professional and excellent support throughout the project. Parth delivered the project exactly as expected — clean, optimized, and on time. Great communication throughout the entire process.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    id: 3,
    name: "Rupa Shukla",
    date: "Backend Developer",
    message:
      "Fantastic job! His problem-solving skills are excellent! Parth handled complex features with ease and delivered better results than we anticipated.",
    rating: 5,
     image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "Deepak Pradhan",
    date: "Frontend Developer",
    message:
      "Great communication, Very professional and always ready to help. Parth wrote clean, scalable code and made sure everything worked perfectly.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 5,
    name: "Akshay Kadiya",
    date: "Backend Developer",
    message:
      "Amazing experience working with Parth. He delivered high-quality work and even suggested improvements that made the project better.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 6,
    name: "Neha Patel",
    date: "Quality Assurance",
    message:
      "Amazing quality and support. Highly recommend to anyone looking for excellent results.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 7,
    name: "Priyanka Thakkar",
    date: "Project Manager",
    message:
      "A dependable developer who always delivers on time. Parth handled the project efficiently and communicated clearly throughout.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",

  }
];

const Testimonial: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;
    const observer = new window.IntersectionObserver(
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

  return (
    <motion.div ref={containerRef} initial="hidden"  animate={mounted ? "visible" : "hidden"} variants={fadeInUp} className="w-full px-6 py-8 flex flex-col items-center gap-y-10 ">
      

        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-transparent bg-clip-text text-5xl font-bold text-center" > Testimonials</motion.h2>

        <div className={`w-full transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-full overflow-hidden">
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-animation { animation: marquee 40s linear infinite; }
            `}</style>

            <div
              className="marquee-animation flex items-center gap-6 px-6 py-4"
              style={{ display: 'inline-flex' as const, whiteSpace: 'nowrap' as const, animationPlayState: isHovered ? 'paused' : 'running' }}
            >
              {[...testimonials, ...testimonials].map((t, idx) => (
                <div key={`${t.id}-${idx}`} className="flex-none min-w-[18rem] max-w-sm bg-[#1c1425] text-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
                  <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500 mb-4" />
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <span className="text-xs text-gray-300">{t.date}</span>
                  <p className="mt-3 text-gray-200 text-sm text-wrap"> {t.message}</p>
                  <div className="mt-3 flex text-yellow-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
    </motion.div>
  );
};

export default Testimonial;
