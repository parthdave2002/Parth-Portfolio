import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingFallback from "./Component/common/LoadingFallback";
import Header from "./Component/Header/Header";
import SplashCursor from './Component/common/splashCursor'

// Lazy load all route components
const Dashboard = lazy(() => import("./Component/dashboard/index"));
const Footer = lazy(() => import("./Component/Footer/Footer"));
const About = lazy(() => import("./Component/About/About"));
const Resume = lazy(() => import("./Component/Resume/Resume"));
const ContactUs = lazy(() => import("./Component/ContactUs/ContactUs"));
const PageNotFound = lazy(() => import("./Component/PageNotFound/PageNotFound"));
const Certificate = lazy(() => import("./Component/Certificate/Certificate"));
const Project = lazy(() => import("./Component/Project/ProjectPage"));

function App() {
  return (
    <>
      {/* Set min-h-screen and add top padding to prevent header overlap */}
      <div className="bg-[#0f0715] min-h-screen pt-20">
        <SplashCursor />
        <BrowserRouter>
            <Header />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                  <Route path="/" element={<Dashboard /> } />
                  <Route path="/about" element={<About /> } />
                  <Route path="/project" element={<Project /> } />
                  <Route path="/resume" element={<Resume /> } />
                  <Route path="/contactUs" element={<ContactUs /> } />
                  <Route path="/certificate" element={<Certificate /> } />
                  <Route path="*" element={<PageNotFound /> } />
              </Routes>
            </Suspense>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;