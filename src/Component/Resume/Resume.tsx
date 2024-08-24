import React from 'react';
import PDF from "/Parth_Dave_Resume.pdf";

const Resume: React.FC = () => {
    const DownloadPDfcall = () =>{
        const pdfUrl = "/Parth_Dave_Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "/Parth_Dave_Resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return (
    <div className="min-h-screen w-screen px-8 py-8 self-center text-center">
      <div className="py-6">
        <div className="self-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold">My Resume</div>
        {/* <div className="self-center content-center text-left lg:text-center text-gray-100 text-[1.3rem] font-normal whitespace-pre-line text-wrap">  We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers. </div> */}
      </div>

      <div  className=' flex justify-center '>
        <div className='cursor-pointer border w-[12rem] flex justify-center border-indigo-500 hover:border-gray-500 rounded-xl p-3 text-indigo-600 hover:bg-gradient-to-r from-[#583683] to-[#413451] hover:text-gray-100 text-[1.2rem] font-semibold' onClick={() => DownloadPDfcall()}>Download Resume </div>
      </div>
      
      <div className="pdf-container hidden lg:block">
        <div className="flex justify-center p-4  rounded-lg ">
            <div className="pdf-wrapper relative"> <object className="pdf-object" data={`${PDF}#toolbar=0&navpanes=0&statusbar=0`} type="application/pdf" width="800" height="700"> </object>  </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;