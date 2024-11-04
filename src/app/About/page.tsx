"use client";
import React, { useState } from "react";
import HomeImage from "../Components/HomeImage";
import Typed from "typed.js";
import Services from "../Components/Services";
import ShowMoreText from "../Components/ShowMoreText";

function About() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Frontend Developer</i>", "&amp; Blogger."],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
      startDelay: 900,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="About"
      className="bg-custom-radial h-full justify-center flex flex-col pt-10"
    >
      <div className=" flex items-center h-screen ">
        <div className="aboutMain flex px-20 ">
          <div className="aboutImg flex-1 flex flex-col justify-center">
            <HomeImage />
          </div>
          <div className="aboutDiv flex-1  flex flex-col  -ml-32 self-start tagName">
            <h2 className="my-2 text-5xl font-extrabold">
              About <span className="text-hoverColor">Me</span>
            </h2>
            <h3 className="tagHead text-[37px] font-bold my-1 tagName">
              <span className="aboutText text-hoverColor shadow-custom ">
                {" "}
                <i ref={el}></i>
              </span>
            </h3>
            <div className="aboutLines w-[90%] my-4 text-md font-medium logo ">
              <ShowMoreText
                limit={536}
                buttonStyles="text-[16px] px-6 py-[10px] w-38"
                text={`Hi, I'm a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, TypeScript, React, Next.js, and Tailwind CSS. I have a deep understanding of UI/UX design principles, allowing me to create visually appealing and user-centered interfaces. With hands-on experience building a variety of projects, I strive to bring designs to life with clean, efficient code and smooth user experiences.Currently, I'm a student at GIAIC, where I've developed my skills in web development and am now diving deeper into Next.js along with exploring Python and AI. I'm always eager to learn new technologies and push the boundaries of what’s possible on the web.I also have a solid understanding of UI/UX principles, and I’m currently enhancing my skills in Python and AI. At GIAIC, I’ve learned these technologies and am always eager to explore more!`}
              />
            </div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}

export default About;
