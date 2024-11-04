"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [activeLink, setActiveLink] = useState("link1");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const sections = ["Home", "About", "Skills", "Projects", "Contact"];
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport
  
    sections.forEach((section, index) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const { offsetTop, clientHeight } = sectionElement;
  
        // Check if the middle of the viewport is within the middle of the section
        if (scrollPosition >= offsetTop + clientHeight / 4 && scrollPosition < offsetTop + (clientHeight * 3) / 4) {
          setActiveLink(`link${index + 1}`);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <div>
      <nav className="headMain flex justify-between bg-transparent px-36 py-3 fixed top-0 left-0 w-full items-center z-50">
        <div className="dropMenu relative right-32">
          <i onClick={toggleMenu} className="iconBar text-white text-3xl cursor-pointer">
            {isOpen ? <FaTimes /> : <FaBars />}
          </i>

          <div
            id="menu"
            className={`absolute rounded-sm left-6 shadow-custom bg-custom-radial backdrop-blur w-56 h-80 transition-transform duration-300 ${isOpen ? "scale-100 block" : "scale-0 hidden"}`}
          >
            <ul className="flex flex-col gap-7 items-center text-[18px] font-medium mt-9">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
                <li
                  key={index}
                  className={`custom-i-${index + 1} navbars transition duration-300 hover:text-hoverColor ${
                    activeLink === `link${index + 1}` ? "text-hoverColor font-bold" : "text-white"
                  }`}
                  onClick={() => {
                    setActiveLink(`link${index + 1}`);
                    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                    toggleMenu(); // Close menu on link click
                  }}
                >
                  <Link href={`#${item}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="logo text-[25px] font-semibold opacity-1 animation slideRight">Portfolio.</div>

        <ul className="header flex gap-8 items-center text-[18px] font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
            <li
              key={index}
              className={`custom-i-${index + 1} navbars transition duration-300 hover:text-hoverColor ${
                activeLink === `link${index + 1}` ? "text-hoverColor font-bold" : "text-white"
              }`}
              onClick={() => {
                setActiveLink(`link${index + 1}`);
                document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Link href={`#${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
