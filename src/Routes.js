import React from "react";
import Landingpage from "pages/Landingpage";
import Login from "pages/Login";
import Aboutus from "pages/Aboutus";
import ServicesOne from "pages/ServicesOne";
import Services from "pages/Services";
import Homepage from "pages/Homepage";
import BookanAppointment from "pages/BookanAppointment";
import FAQ from "pages/FAQ";
import Signup from "pages/Signup";
import Doctor from "pages/Doctor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/bookanappointment" element={<BookanAppointment />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicesone" element={<ServicesOne />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landingpage" element={<Landingpage />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
