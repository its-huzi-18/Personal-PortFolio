import React from "react";
import About from "./About/page";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Skills from "./Skills/page";
import Contact from "./Contact/page";

function Page() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="section" id="Home"><Home /></div>
      <div className="section" id="About"><About /></div>
      <Skills />
      <div className="section" id="Contact"><Contact /></div>
    </div>
  );
}

export default Page;
