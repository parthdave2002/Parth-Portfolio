import Dashboard from "./dashboard";
import MyEducation from "../My Education/My-Education";
import MySkill from "../My Skills/My-Skill";
import ContactUs from "../ContactUs/ContactUs";
import Testimonial from "../Testimonial/Testimonial";
import Services from "../Services/Services";

const IndexDashboard = () => {
  return (
    <>
        <div>
            <Dashboard />  
            <MyEducation />
            <MySkill />
            <Services />
            <Testimonial />
            <ContactUs />
        </div>
    </>
  );
}

export default IndexDashboard;