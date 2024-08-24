import Error from "../../../public/404-error_23-2147737151.jpg";

const PageNotFound = () => {
  return (
    <>
      <div className=" px-6 py-[4rem] lg:flex justify-around">
            <div className="flex justify-center"> <img src={Error} className="lg:h-[26rem]  rounded-[2rem]"  alt="profile photo" />    </div>
      </div>
    </>
  );
}

export default PageNotFound;