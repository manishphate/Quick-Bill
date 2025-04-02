import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/LandingPage/Landing.jsx";
import LodingNavbar from "./pages/LandingPage/Components/LoadingNavBar/LodingNavbar.jsx";
import PartnerWithUs from "./pages/LandingPage/Components/PartnerWithUs/PartnerWithUs.jsx";

import Solution from "./pages/LandingPage/Components/Solution/Solution.jsx";

import SignUp from "./components/authentication/signup/SignUp.jsx";
import SignIn from "./components/authentication/signin/SignIn.jsx";
import User_Dashboard from "./components/user/user_dashboard/User_Dashboard.jsx";
import ItemForm from "./components/user/item/ItemForm.jsx";


const App = () => {
  return (
    <>
      <Router>
        {/* <LodingNavbar /> */}

        <Routes>
          <Route path="/" element={<Landing/>}/>

          <Route path="/solution" element={<Solution/>}/>

          <Route path="/loadingNavBar" element={<LodingNavbar />}/>
          <Route path="/solution"/>

          <Route path="/acountant" element={<PartnerWithUs/>}/>
          <Route path="/solution"/>

          <Route path="/userDashboard" element={<User_Dashboard/>}/>
          <Route path="/invoice"/>
          <Route path="/signup" element={< SignUp/>}/>
          <Route path="/signin" element={< SignIn/>}/>

          <Route path="/itemForm" element={<ItemForm/>}/>

        
        </Routes>
      </Router>
    </>
  );
};

export default App;