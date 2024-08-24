import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/dashboard/index";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import About from "./Component/About/About";
import Resume from "./Component/Resume/Resume";
import ContactUs from "./Component/ContactUs/ContactUs";
import PageNotFound from "./Component/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <div className="bg-[#0f0715]">
        <BrowserRouter>
            <Header />
              <Routes>
                  <Route path="/" element={<Dashboard /> } />
                  <Route path="/about" element={<About /> } />
                  <Route path="/resume" element={<Resume /> } />
                  <Route path="/contactUs" element={<ContactUs /> } />
                  <Route path="*" element={<PageNotFound /> } />
              </Routes>
            <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;