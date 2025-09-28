import React, { useEffect, useState } from "react";
import { FaBug, FaDatabase, FaMobile, FaPencilRuler, FaShoppingBag } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { SiFastapi } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";

const Services = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const services = [
        {
            icon: <TfiWorld size={48} />,
            title: "Responsive Web Design",
            description: "I create fully responsive web designs that adapt seamlessly to all screen sizes and devices, ensuring a smooth and user-friendly experience.",
            delay: "200",
        },
        {
            icon: <FaPencilRuler size={48} />,
            title: "Interactive UI Development",
            description: "I build interactive and user-friendly interfaces with smooth animations and dynamic elements, focusing on creating seamless user experiences. ",
            delay: "200",
        },
        {
            icon: <SiFastapi size={48} />,
            title: "REST API Development",
            description: "I develop secure and scalable REST APIs that enable seamless communication between applications.",
            delay: "200",
        },
        {
            icon: <FaDatabase size={48} />,
            title: "Database Architecture",
            description: "I design efficient and scalable database architectures to ensure optimized data storage, fast retrieval, and high performance.",
            delay: "200",
        },
        {
            icon: <FaMobile size={48} />,
            title: "Progressive Web Apps",
            description: "I develop Progressive Web Apps that deliver fast, reliable, and engaging user experiences.",
            delay: "200",
        },
        {
            icon: <FaShoppingBag size={48} />,
            title: "E-Commerce Applications",
            description: "I build scalable and secure e-commerce applications with seamless user experiences, featuring product management, secure payment integration, and optimized performance.",
            delay: "200",
        },
        {
            icon: <FaBug size={48} />,
            title: "Maintenance & Bug Fixes",
            description: "I provide ongoing maintenance and bug fixing services to ensure websites and applications run smoothly. My focus is on optimizing performance, resolving issues quickly, and keeping systems secure and up-to-date.",
            delay: "200",
        },
        {
            icon: <MdSecurity size={48} />,
            title: "Authentication & Security",
            description: "I implement secure authentication systems and data protection measures to safeguard applications. My focus is on building role-based access control, and preventing vulnerabilities like SQL injection, XSS, and CSRF to ensure user and application security.",
            delay: "200",
        },
        {
            icon: <FaChartSimple size={48} />,
            title: "Website Performance Optimization",
            description: "I optimize website performance to deliver faster load times, improved SEO, and a seamless user experience. My approach includes code optimization, Lazy Loading, caching strategies, for high-performing websites.",
            delay: "200",
        },
    ];

    return (
        <div id="featured-services" className="min-h-screen w-full px-6 py-10 text-center">
            <div className="pb-10">
                <h2 className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent bg-clip-text text-4xl md:text-5xl font-bold"> Services </h2>
            </div>

            <div className="container ">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div key={index} className={`group flex flex-col justify-between items-center text-center p-6 rounded-xl shadow-md hover:shadow-2xl bg-[#1c1425] hover:bg-indigo-600 text-white min-h-[230px] h-full duration-200 ease-in-out transform hover:scale-105 ${mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}>
                            <div className="mb-4 text-indigo-500 group-hover:text-white"> {service.icon} </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                                <p className="text-sm leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services