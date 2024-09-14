import HRcertificate from "../../../public/frontend_developer_react certificate_page-0001.jpg"


const Certificate = () => {
  return (
    <>
      <div className="min-h-screen w-screen px-6 py-6 ">
        <div className="flex flex-col gap-y-6 py-6">
              <div className="self-center flex justify-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold underline-animation"> Certificates </div>
                <img alt=""  src={HRcertificate}  className=""/>        
        </div>

      </div>
    </>
  );
}

export default Certificate;