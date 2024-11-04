"use client";
import Icons from "./Icons";
import Typed from "typed.js";
import React from "react";
import HomeImage from "./HomeImage";

export default function Home() {
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
    <>
      <div className="homeMain flex justify-between items-center h-screen w-full p-20 mt-9">
        <div className="flex flex-col w-1/2 gap-7">
          <h3 className="smallText tagHead text-[32px] font-bold">Hellow, It's Me</h3>
          <h1 className="mediumText tagName text-[56px] font-bold -my-9">Huzaifa Wahab</h1>
          <h3 className=" smallText tagHead text-[32px] font-bold">
            I'm a{" "}
            <span className="text-hoverColor">
              {" "}
              <i ref={el}></i>
            </span>
          </h3>
          <p className="homeLines tagLines text-[17px]">
            Crafting seamless user experiences through innovative front-end
            development, I create responsive and visually appealing web
            applications that engage users and enhance interaction
          </p>
          <div>
            <Icons />
          </div>
          <div>

          <a href="/myCv.pdf" download="myCv.pdf">
            <button className="btn text-[16px] bg-hoverColor rounded-full px-7 py-3 w-44 font-semibold shadow-custom tracking-wide text-black hover:bg-zinc-900 hover:text-white">
              Download CV
            </button>
          </a>
          </div>
        </div>
        <div className="imgDiv flex-2 -mt-9 mr-28">
          <HomeImage />
        </div>
      </div>
    </>
  );
}
