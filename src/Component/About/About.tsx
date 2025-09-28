import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen w-full px-4 py-8 flex flex-col gap-y-8 items-center bg-gray-900">
      <h2 className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent bg-clip-text text-4xl md:text-5xl font-bold pb-5"> About </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full max-w-7xl">
        <div className="flex-shrink-0 w-full md:w-64 h-64 flex-1">
          <img src="/5154267.jpg" alt="Profile 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>

        <div className="flex-1 text-gray-200">
          <h2 className="md:text-2xl text-xl font-semibold mb-4">  Software Developer </h2>
          <ul className="flex flex-col gap-x-6 gap-y-3 mb-6 text-md">
            <li> <span className="font-semibold">Name :</span> Parth Dave </li>
            <li> <span className="font-semibold">Email :</span> daveparth2604@gmail.com </li>
            <li> <span className="font-semibold">Phone :</span> +91 9904764781 </li>
            <li> <span className="font-semibold">City :</span> Ahmedabad, Gujarat </li>
            <li> <span className="font-semibold">Degree :</span> BCA </li>
            <li> <span className="font-semibold">Experience :</span> 4 years </li>
            <li> <span className="font-semibold"> Job Type  :</span> Full time / Freelance  </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 w-full max-w-7xl">
        <div className="flex-shrink-0 w-full md:w-64 h-64 flex-1">
          <img src="/5154267.jpg" alt="Profile 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>

        <div className="flex-1 text-gray-200">
          <p className="text-gray-300"> I am a passionate Software Developer skilled in building scalable, efficient, and user-friendly applications. With expertise in both frontend and backend technologies, I focus on writing clean, maintainable code and delivering high-quality solutions that solve real-world problems.  </p>
        </div>
      </div>

       <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full max-w-7xl">
        <div className="flex-shrink-0 w-full md:w-64 h-64 flex-1">
          <img src="/5154267.jpg" alt="Profile 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>

        <div className="flex-1 text-gray-200">
          <h2 className="md:text-2xl text-xl font-semibold mb-4">  Software Developer </h2>
          <ul className="flex flex-col gap-x-6 gap-y-3 mb-6 text-md">
            <li> <span className="font-semibold">Name :</span> Parth Dave </li>
            <li> <span className="font-semibold">Email :</span> daveparth2604@gmail.com </li>
            <li> <span className="font-semibold">Phone :</span> +91 9904764781 </li>
            <li> <span className="font-semibold">City :</span> Ahmedabad, Gujarat </li>
            <li> <span className="font-semibold">Degree :</span> BCA </li>
            <li> <span className="font-semibold">Experience :</span> 4 years </li>
            <li> <span className="font-semibold"> Job Type  :</span> Full time / Freelance  </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;