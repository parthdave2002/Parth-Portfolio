import { PiMedalThin } from "react-icons/pi";


const PageNotFound = () => {
  return (
    <>
      <div className="lg:h-screen w-screen px-6 py-6 lg:flex justify-around">
        <div>
            <div className="flex justify-center gap-x-5"> 
                <div className="self-center"> <PiMedalThin className="self-center text-[2.5rem] lg:text-[3rem] font-normal self-center text-indigo-600 "/></div>
                <div className="self-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2rem] lg:text-[2.5rem] font-bold"> Page Not Found</div>
            </div> 
        </div>
      </div>
    </>
  );
}

export default PageNotFound;