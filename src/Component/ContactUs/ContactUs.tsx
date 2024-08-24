import { FiPhoneCall, FiMail  } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { Button, Input } from "reactstrap";

const ContactUs = () => {
  return (
    <>
      <div className="w-screen px-8 py-8 ">
          <div className="py-6 self-center text-center">
            <div className="self-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold"> Contact Details </div>
          </div>

          <div className="self-center text-center hidden lg:block px-[14rem]" >
            <div className="flex justify-between ">
                <div>
                  <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text ">  L </div>
                  <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text ">  e </div>
                  <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text ">  t  </div>
                  <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text "> ’s </div>
                </div>
                
                <div>
                <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text ">  h </div>
                <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text ">  a </div>
                <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text ">  v </div>
                <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text ">  e </div>
                </div>

                <div>
                <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text ">  a  </div> 
                </div>

                <div>
                <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text ">  c </div>
                <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text ">  h </div>
                <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text ">  a </div>
                <div className="bg-[#8750f7] text-transparent inline-block bg-clip-text text-[7rem] font-bold animated-text ">  t   </div>
                </div>
            </div>
          </div>

          <div className="lg:flex gap-x-[15rem]  lg:px-[6rem] py-6">
            <div className="bg-[#1c1425] p-5 rounded-xl flex flex-col lg:px-[5rem] lg:py-[2rem]">
              <div>
                <div className="self-center text-center flex justify-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2rem] lg:text-[2.5rem] font-bold">Let’s work together!</div>
                <div className="text-gray-100  lg:text-[1rem] font-semibold">I design and code beautifully simple things and i love what i do. Just simple like that!</div>
              </div>
              <div className="py-4 flex flex-col gap-y-4">
                <div className="lg:flex lg:flex-row lg:gap-x-4 justify-around flex flex-col gap-y-4">
                  <Input type="text" placeholder="First Name" className="bg-[#050709] text-[1rem] focus:border focus:border-green-800 w-full text-gray-100 border border-gray-700 rounded-md p-3"/>
                  <Input type="text" placeholder="Last Name"  className="bg-[#050709] text-[1rem] focus:border focus:border-green-200 w-full text-gray-100 border border-gray-700 rounded-md p-3"/>
                </div>
                <div className="lg:flex lg:flex-row lg:gap-x-4 justify-around flex flex-col gap-y-4">
                  <Input type="email" placeholder="Email Address" className="bg-[#050709] text-[1rem] focus:border focus:border-green-200 w-full text-gray-100 border border-gray-700 rounded-md p-3"/>
                  <Input type="tel" placeholder="Phone Number" className="bg-[#050709] text-[1rem] focus:border focus:border-green-200 w-full text-gray-100 border border-gray-700 rounded-md p-3"/>
                </div>

                <div className="lg:flex lg:flex-row lg:gap-x-4 justify-around flex flex-col gap-y-4">
                  <Input type="textarea" placeholder="Message" className="bg-[#050709] text-[1rem] focus:border focus:border-green-200 w-full text-gray-100 border border-gray-700 rounded-md p-3 lg:min-h-[12rem]"/>
                </div>

                <div className="lg:flex lg:flex-row lg:gap-x-4 justify-around flex flex-col gap-y-4">
                  <Button className="bg-gradient-to-r from-[#583683] to-[#413451] focus focus:border-indigo-600 text-[1.2rem] lg:text-[1.3rem] font-serif  text-gray-100 rounded-xl p-2 lg:p-3 lg:w-[15rem]"> Send Message </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-6 lg:py-[6rem]" >
              <div className="flex gap-x-5">
                  <div className="self-center rounded-full p-3 bg-gradient-to-b from-[#1c1425] to-[#583683]"> <FiPhoneCall className=" text-[1.8rem] font-bold text-gray-200 "/></div>
                  <div>
                  <div className="text-gray-100 text-[1.2rem] font-semibold leading-5"> Phone : </div>
                  <div className="text-gray-100 text-[1.3rem] font-bold"> +91-9904764781</div>
                  </div>
              </div>

              <div className="flex gap-x-5">
                  <div className="self-center rounded-full p-3 bg-gradient-to-b from-[#1c1425] to-[#583683]"> <FiMail className=" text-[1.8rem] font-bold text-gray-200 "/></div>
                  <div>
                  <div className="text-gray-100 text-[1.2rem] font-semibold leading-5"> Email : </div>
                  <div className="text-gray-100 text-[1rem] font-bold"> daveparth2604@gmail.com</div>
                  </div>
              </div>

              <div className="flex gap-x-5">
                  <div className="self-center rounded-full p-3 bg-gradient-to-b from-[#1c1425] to-[#583683]"> <MdOutlineLocationOn className=" text-[1.8rem] font-bold text-gray-200 "/></div>
                  <div>
                  <div className="text-gray-100 text-[1.2rem] font-semibold leading-5"> Address : </div>
                  <div className="text-gray-100 text-[1rem] font-bold"> Ahmedabad, Gujarat </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default ContactUs;