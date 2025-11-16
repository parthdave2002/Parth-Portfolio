import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose  } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0 h-20 z-50">
        <nav className={`h-20 items-center md:px-12 p-4 bg-[#0f0715] shadow ${isSticky ? "" : "" }`}>
          <div className="flex items-center justify-between">
            <a href="https://mail.google.com/mail/u/0/#inbox" className="text-white hover:text-[#8750f7] font-semibold text-lg cursor-pointer"> daveparth2604@gmail.com </a>
           
            <div className="lg:flex items-center gap-3 hidden text-gray-100">
              <Link to="/" className="block hover:text-[#8750f7] py-2 px-4 cursor-pointer underline-animation">  Home </Link>
              <Link to="/about" className="block hover:text-[#8750f7] py-2 px-4 cursor-pointer underline-animation"> About </Link>
              <Link to="/project" className="block hover:text-[#8750f7] py-2 px-4 cursor-pointer underline-animation"> Projects </Link>
              <Link to="/certificate" className="block hover:text-[#8750f7] py-2 cursor-pointer">  Certificates </Link>
              <Link to="/contactUs"className="block hover:text-[#8750f7] py-2 px-4 cursor-pointer underline-animation"> Contact Us </Link>
            </div>

            <button onClick={toggleMenu} className="lg:hidden text-gray-100 text-3xl">{isMenuOpen ?  <MdOutlineClose  /> : <HiMenu /> } </button>
          </div>

          {isMenuOpen && (
            <div className="fixed inset-0 top-0 left-0 w-full h-full bg-[#0f0715] z-50 flex flex-col items-center justify-center space-y-6 text-white text-xl">
              <Link to="/" className="hover:text-[#8750f7] py-2 cursor-pointer w-full text-center" onClick={toggleMenu}> Home</Link>
              <Link to="/about" className="hover:text-[#8750f7] py-2 cursor-pointer w-full text-center" onClick={toggleMenu}> About </Link>
              <Link to="/project" className="hover:text-[#8750f7] py-2 cursor-pointer w-full text-center" onClick={toggleMenu}> Project </Link>
              <Link to="/certificate" className="hover:text-[#8750f7] py-2 cursor-pointer w-full text-center" onClick={toggleMenu}> Certificates </Link>
              <Link to="/contactUs" className="hover:text-[#8750f7] py-2 cursor-pointer w-full text-center" onClick={toggleMenu}> Contact Us </Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;