
const About = () => {
  return (
    <>
      <div className="min-h-screen w-screen px-6 py-6 ">
        <div className="flex flex-col gap-y-6 py-6">
              <div className="self-center flex justify-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold underline-animation"> About Me </div>
              <div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap">  Hello, My name is Parth Dave. I have compelted my BCA (Bachelor of Computer Applications) from JG Colleage of computer Application in 2022. Then i was joined the Avanzar solution. Were i was Learn React.js , React Native, Redux, Redux-Saga, Bitbucket, Jira, and all the things. Then i was joined Agrovikas Agritech PVT LTD in May-2023. Currently, i am Working in this company.Here i have learn node.js Express.js and monogdb. and the Trello for task Managment.  i have completed 3 projects. 2 in avanzar solution and 1 in Agrovikas. Roles and Responsibilty:  i am Frontend Developer so my work is to create a Responsive website and connect the API of backend.   </div>

              <div className="self-center flex justify-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold underline-animation"> Education</div>
              <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className=" self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap " > BCA (Bachelor of Computer Applications),  JG Colleage of computer Application  - 2022</div></li> </ul>
              <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap " > Higher Secondary (HSC), Seth shri I.N Patel Swaminarayan - 2019</div></li> </ul>
              <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap " > Secondary School (SSC), Rachana high school - 2017</div></li> </ul>

              <div className="self-center flex justify-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text lg:text-[2.5rem] text-[1.8rem] font-bold underline-animation"> Professional Experience</div>
              <div className="flex flex-col gap-y-16">
  {[
    {
      title: "Software Developer | CMARIX",
      duration: "Oct 2024 - Current",
      skills: "Redux-toolkit, Gitlab",
    },
    {
      title: "Software Developer | Agrovikas Agritech PVT LTD",
      duration: "May 2023 - Oct 2024",
      skills: "Tailwind Css, Node.js, Express.js, MongoDB, Typescript, Trello",
    },
    {
      title: "Software Developer | Avanzar Solution",
      duration: "May 2022 - May 2023",
      skills:
        "HTML, CSS, Javascript, React.js, React-Bootstrap, React-Redux, Redux-Saga, Bitbucket, Jira",
    },
  ].map((job, index) => (
    <div key={index}>
      <div className="lg:flex justify-between gap-x-24">
        <div className="text-left text-gray-100 text-[1.3rem] font-normal whitespace-pre-line">
          {job.title}
        </div>
        <div className="text-left text-gray-100 text-[1.3rem] font-normal whitespace-pre-line">
          {job.duration}
        </div>
      </div>
      <ul className="list-disc list-outside ml-6 mt-2">
        <li className="text-indigo-500">
          <div className="text-left text-gray-100 text-[1.3rem] font-normal whitespace-pre-line">
            Skills and Tools: {job.skills}
          </div>
        </li>
      </ul>
    </div>
  ))}
</div>


              <div className="self-center flex justify-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text lg:text-[2.5rem] text-[1.8rem] font-bold underline-animation"> Project Details</div>
              <div className="flex flex-col gap-y-[4rem]">
                <div>
                  <div className="">
                    <div className=" self-center content-center text-left text-gray-100 text-[1.3rem] font-normal whitespace-pre-line text-wrap" >Project : Dialer with CRM</div> 
                    <div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal whitespace-pre-line text-wrap">
                      Dialer is maniacally focused on the calling system. In dialer we also be used to broadcast recorded
                      messages through interactive voice message (IVR), push notification and SMS. In that we can save the
                      recording and listen that recording for quality analyst to know customer interest and csr skills to grow the
                      business and also convenient for customer service representative
                    </div>
                  </div>
                  
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Actively engaged in daily scrum meetings, sprint planning sessions, and progress updates to ensureseamless collaboration within the development team </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Successfully integrated a dynamic menu WordPress. </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role. </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>

                </div>

                <div>
                  <div className="">
                    <div className=" self-center content-center text-left text-gray-100 text-[1.3rem] font-normal whitespace-pre-line text-wrap" >Project : Employee Training Management System (E-TIMS)</div> 
                    <div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal whitespace-pre-line text-wrap">
                      Employee training management system (E-TIMS) is a training management system in that create a sop for
                      new joining employee and after that trainee have to give the mcq test in limited time period if trainee fails more
                      than three time in exam then trainee has taking training under a senior employee
                    </div>
                  </div>
                  
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Daily scrum meetings for sprint planning, and progress updates and collaboration.</div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Designed and crafted an intuitive User Interface using React, HTML, Tailwind CSS, and JavaScript. </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Developed a hybrid application using React JS and Laravel for optimal performance </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Conducted weekly client demos to showcase features, fostering transparency and client satisfaction. </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Embraced a component-driven development approach for enhancing code modularity </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >API binding for effective communication with the server, ensuring seamless data exchange </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Implemented unit test cases, achieving 100% code coverage using Typescript for reliability </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Creating Common components in React for effective development </div></li> </ul>
                </div>

                <div>
                  <div className="">
                    <div className=" self-center content-center text-left text-gray-100 text-[1.3rem] font-normal whitespace-pre-line text-wrap" >Project : karmaBees</div> 
                    <div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal whitespace-pre-line text-wrap">
                      It is an online NGO portal where you can post a photographs and videos then you also create a groups
                      or buy the product which appears on the list and then the end-to-end payment process has been done.
                      Whole application istranslated in different languages as well based on the country.
                    </div>
                  </div>
                  
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Engaged in daily scrum meetings and sprint planning for effective project coordination.</div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Conducted weekly client demos, showcasing newly developed features to ensure client satisfaction. </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Contributed to the development of a hybrid Win JS and React application, emphasizing reusable components. </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Conducted weekly client demos to showcase features, fostering transparency and client satisfaction. </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Implemented API binding for seamless server communication. </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Integrated login with google and login with Facebook for customer login.</div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Integrated a secure payment gateway, such as PayPal, enabling transactions via Visa & MasterCard.</div></li> </ul>
                </div>

                <div>
                  <div className="">
                    <div className=" self-center content-center text-left text-gray-100 text-[1.3rem] font-normal whitespace-pre-line text-wrap" >Project : Datebook AI - Admin Panel </div> 
                    <div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal whitespace-pre-line text-wrap">
                      Datebook AI is a dating Application. In that Application User can create account using mail id and after that base on profile criteria user can show interestd user profile.
                      After that user can create Video call schedule, Meet up schdule, Chat. 
                      User can gives other profile to Like, Super like, Dislike. User also can block and report other user.
                      From Admin panel admin can show all the data and Export in CSV and Excel format. & Admin can create Notification for application user.
                      Super Admin can manage role permission. 
                    </div>
                  </div>
                  
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Created list modules and given access that modules as per give access to that role.  </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" > Bulk Upload user functionality.  Admin can add multiple user at a same time. </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Successfully integrated a REST APIs. </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" > There is a Export data functionality in CSV and Excel format.  </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Implemented API bindings for seamless communication with the server </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Proactively identified and resolved software bugs while providing ongoing support to the team </div></li> </ul>
                  <ul className='list-outside list-disc ml-6'>  <li className="text-indigo-500"><div className="self-center content-center text-left text-gray-100 text-[1.3rem] font-normal  whitespace-pre-line text-wrap" >Conducted weekly client demonstrations to showcase newly developed features </div></li> </ul>

                </div>

              </div> 
        </div>
      </div>
    </>
  );
}

export default About;