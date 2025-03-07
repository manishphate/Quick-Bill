import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/LandingPage/Landing.jsx";
import LodingNavbar from "./pages/LandingPage/Components/LoadingNavBar/LodingNavbar.jsx";
import PartnerWithUs from "./pages/LandingPage/Components/PartnerWithUs/PartnerWithUs.jsx";
import User_Dashboard from "./components/user/user_dashboard/User_Dashboard.jsx";

const App = () => {
  return (
    <>
      <Router>
        {/* <LodingNavbar /> */}

        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/loadingNavBar" element={<LodingNavbar />}/>
          <Route path="/solution"/>
          <Route path="/acountant" element={<PartnerWithUs/>}/>
          <Route path="/solution"/>
          <Route path="/home" element={<User_Dashboard/>}/>

          <Route path="/invoice"/>
        
        </Routes>
      </Router>
    </>
  );
};

export default App;
