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
    message: "This service was amazing! Highly recommend to everyone. This service was amazing! Highly recommend to everyone. This service was amazing! Highly recommend to everyone.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Devarshi Trivedi",
    date: "Frontend Developer",
    message:
      "Very professional and excellent support throughout the project. Very professional and excellent support throughout the project. Very professional and excellent support throughout the project.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Rupa Shukla",
    date: "Backend Developer",
    message:
      "The quality exceeded my expectations. Fantastic job! The quality exceeded my expectations. Fantastic job! The quality exceeded my expectations. Fantastic job!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    id: 4,
    name: "Deepak Pradhan",
    date: "Frontend Developer",
    message:
      "Great communication and results delivered on time. Great communication and results delivered on time. Great communication and results delivered on time.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "Akshay Kadiya",
    date: "Backend Developer",
    message:
      "The team was incredible and the work exceeded my expectations. Definitely coming back for more projects!",
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
      "Top-notch service! Very happy with how everything turned out. Will hire again.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 8,
    name: "Gopal Patel",
    date: "Project Manager",
    message:
      "The entire process was smooth and professional. Exceeded my expectations!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [fade, setFade] = useState(true);
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


  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 400); // fade duration
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div ref={containerRef} initial="hidden"  animate={mounted ? "visible" : "hidden"} variants={fadeInUp} className="w-full px-6 py-8 flex flex-col items-center gap-y-10 ">
      

        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-transparent bg-clip-text text-5xl font-bold text-center" > Testimonials</motion.h2>

        <div className={`flex justify-center transition-all duration-1000 ease-in-out will-change-transform will-change-opacity min-h-[380px] max-h-[380px] ${mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
          <div key={testimonials[currentIndex].id} className={`px-4 flex-shrink-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 snap-center transition-all duration-500 ease-in-out ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} >
            <div className="bg-[#1c1425] text-white rounded-2xl shadow-lg p-6 sm:p-8 h-full">
              <div className="flex flex-col items-center text-center">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                <h1 className="text-sm">{testimonials[currentIndex].date}</h1>

                <p className="mt-4 text-gray-200 text-sm sm:text-base"> {testimonials[currentIndex].message} </p>
                <div className="mt-4 flex justify-center text-yellow-400">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </motion.div>
  );
};

export default Testimonial;
