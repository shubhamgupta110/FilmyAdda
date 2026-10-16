import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import Footer from "./Components/Footer";
import Demo from "./Components/Demo";
import { useState } from "react";

export default function App() {
  const [activepage, setActivepage] =useState("default");                            //useState hook to manage the active page state
  return (
    <>
    
      
      <Navbar onLinkClick={setActivepage}  />
      <MainPage currentPage={activepage} />
      <Footer />
      
      {/* <Demo/> */}
      

    </>
  );
}