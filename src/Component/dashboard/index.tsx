import Dashboard from "./dashboard";
import MyEducation from "../My Education/My-Education";
import MySkill from "../My Skills/My-Skill";
import ContactUs from "../ContactUs/ContactUs";

const IndexDashboard = () => {
  return (
    <>
        <div>
            <Dashboard />  
            <MyEducation />
            <MySkill />
            <ContactUs />
        </div>
    </>
  );
}

export default IndexDashboard;