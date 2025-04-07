 
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import StreamLogin from "./Components/StreamLogin";
import StreamSignUp from "./Components/StreamSignUp";
import Home from "./Components/Home";
import CoinSellerSignUp from "./Components/CoinSellerSignUp";
import CoinSellerLogin from "./Components/CoinSellerLogin";
import CoinHome from "./Components/CoinHome";
import AdminLogin from "./Components/AdminLogin";
import AdminSignUp from "./Components/AdminSignUp";
import AdminHome from "./Components/AdminHome";
const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<LandingPage/>} />
      <Route path="/Streamlogin" element={<StreamLogin/>}/>
      <Route path="/StreamSignUp" element={<StreamSignUp/>}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="/CoinSellerSignUp"element={<CoinSellerSignUp />} />
      <Route path="/CoinSellerLogin" element={<CoinSellerLogin/>}/>
      <Route path="/CoinHome" element={<CoinHome/>}/>
      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/AdminSignUp" element={<AdminSignUp/>}/>
      <Route path="/AdminHome" element={<AdminHome/>}/>
    </Routes>
  );
};

export default App;

