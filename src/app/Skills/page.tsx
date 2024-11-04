"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import MainHeading from "../Components/mainHeading";
import Projects from "../Projects/page";

type SkillName =
  | "HTML"
  | "CSS"
  | "TypeScript"
  | "Tailwind"
  | "React"
  | "Next.js";

interface Skill {
  name: SkillName;
  icon: JSX.Element;
  target: number;
}

const skills: Skill[] = [
  { name: "HTML", icon: <FaHtml5 />, target: 90 },
  { name: "CSS", icon: <FaCss3Alt />, target: 85 },
  { name: "TypeScript", icon: <BiLogoTypescript />, target: 75 },
  { name: "Tailwind", icon: <RiTailwindCssFill />, target: 80 },
  { name: "React", icon: <FaReact />, target: 88 },
  { name: "Next.js", icon: <RiNextjsFill />, target: 70 },
];

function Skills() {
  const [skillPercentages, setSkillPercentages] = useState<
    Record<SkillName, number>
  >({
    HTML: 0,
    CSS: 0,
    TypeScript: 0,
    Tailwind: 0,
    React: 0,
    "Next.js": 0,
  });

  const [professionalSkillPercentages, setProfessionalSkillPercentages] =
    useState<number[]>([0, 0, 0, 0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const skillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const backgroundTimer = setTimeout(() => {
      setShowBackground(true);
    }, 500);

    const skillTimers = skills.map((skill, index) =>
      setTimeout(() => {
        setSkillPercentages((prev) => ({
          ...prev,
          [skill.name]: skill.target,
        }));
      }, 500 + index * 500)
    );

    const professionalSkills = [90, 72, 65, 80];
    const professionalTimers = professionalSkills.map((target, index) =>
      setTimeout(() => {
        setProfessionalSkillPercentages((prev) => {
          const updated = [...prev];
          updated[index] = target;
          return updated;
        });
      }, 500 + (skills.length + index) * 500)
    );

    return () => {
      clearTimeout(backgroundTimer);
      skillTimers.forEach((timer) => clearTimeout(timer));
      professionalTimers.forEach((timer) => clearTimeout(timer));
    };
  }, [isInView]);

  const radius = 37;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="bg-custom-radial">
      <div ref={skillsRef} id="Skills" className="pb-6">
        <div className="skillHead pt-2 -mb-20">
          <MainHeading text1="My" text2="Skills" textSize="text-[2.3rem]" />
        </div>
        <h2 className="techHead tagHead text-[26px] font-bold w-1/2 text-center pt-6 -mb-6 text-customColor">
          Technical Skills
        </h2>
        <div className="skillDiv flex px-20 justify-between">
          <div className="techSkills w-[600px] h-[500px] mt-10 px-[80px] logo">
            {skills.map((skill: Skill) => (
              <div key={skill.name} className="">
                <i
                  className={`text-2xl ${
                    skill.name === "HTML"
                      ? "text-orange-500"
                      : skill.name === "CSS"
                      ? "text-sky-600"
                      : skill.name === "TypeScript"
                      ? "text-cyan-500"
                      : skill.name === "Tailwind"
                      ? "text-sky-500"
                      : skill.name === "React"
                      ? "text-sky-300"
                      : "text-white"
                  }`}
                >
                  {skill.icon}
                </i>
                <div className="text-lg">{skill.name}</div>
                <div className="relative rounded-lg w-full h-[5px] bg-secondBg">
                  <span
                    className={`shadow-custom block h-full ${
                      showBackground ? "bg-[#0ef]" : "bg-transparent"
                    }`}
                    style={{
                      width: `${skillPercentages[skill.name]}%`,
                      transition:
                        "width 1s ease-in-out, background-color 0.5s ease-in-out",
                    }}
                  ></span>
                </div>
                <div className="text-right">
                  {skillPercentages[skill.name]}%
                </div>
              </div>
            ))}
          </div>

          <div className="proContainer flex flex-col justify-center items-center skillLeft">
            <h2 className="proSkillH2 text-3xl pb-8 font-bold">
              Professional Skills
            </h2>
            <div className="proSkillDiv flex items-center flex-wrap justify-center gap-5">
              {[
                "Creativity",
                "Communication",
                "Problem Solving",
                "Team Leadership",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center m-4"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <svg
                    width="110"
                    height="110"
                    viewBox="0 0 92 92"
                    className="circleSize mb-2"
                  >
                    <circle
                      cx="45"
                      cy="45"
                      r="37"
                      fill="none"
                      stroke="#323946"
                      strokeWidth="5"
                    ></circle>
                    <circle
                      cx="45"
                      cy="45"
                      r="37"
                      fill="none"
                      stroke="#0ef"
                      strokeWidth="5"
                      strokeDasharray={`${
                        circumference *
                        ((hoveredIndex === index
                          ? Math.max(
                              0,
                              professionalSkillPercentages[index] - 40
                            )
                          : professionalSkillPercentages[index]) /
                          100)
                      } ${circumference}`}
                      strokeLinecap="round"
                      style={{
                        transition: "stroke-dasharray 1s ease-in-out",
                      }}
                    ></circle>
                    <text
                      x="45"
                      y="50"
                      className="text-center text-sm font-semibold fill-current text-white"
                      dominantBaseline="middle"
                      textAnchor="middle"
                    >
                      {hoveredIndex === index
                        ? Math.max(0, professionalSkillPercentages[index] - 40)
                        : professionalSkillPercentages[index]}
                      %
                    </text>
                  </svg>
                  <div className="circleText text-base font-semibold text-center">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <Projects />
      </div>
    </div>
  );
}

export default Skills;
