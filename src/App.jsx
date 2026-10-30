import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import Demo from "./Components/Demo";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  const [activepage, setActivepage] =useState("default");                            //useState hook to manage the active page state
  return (
    <>

      <BrowserRouter>
      <Navbar onLinkClick={setActivepage}  />
      <MainPage currentPage={activepage} />
      </BrowserRouter>
      {/* <Demo/> */}


    </>
  );
}