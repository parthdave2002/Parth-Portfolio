import React, { lazy, Suspense } from 'react';
import LoadingFallback from '../common/LoadingFallback';

const Dashboard = lazy(() => import('./dashboard'));
const MyEducation = lazy(() => import("../My Education/My-Education"));
const MySkill = lazy(() => import("../My Skills/My-Skill"));
const ContactUs = lazy(() => import("../ContactUs/ContactUs"));
const Testimonial = lazy(() => import("../Testimonial/Testimonial"));
const Services = lazy(() => import("../Services/Services"));
const About = lazy(() => import("../About/About"));

const IndexDashboard = () => {
  return (
    <>
        <div>
            <Suspense fallback={<LoadingFallback />}>
              <Dashboard />
            </Suspense>
            <Suspense fallback={null}>
              <About /> 
              <MyEducation />
              <MySkill />
              <Services />
              <Testimonial />
              <ContactUs />
            </Suspense>
        </div>
    </>
  );
}

export default IndexDashboard;