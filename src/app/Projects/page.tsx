import React from "react";
import MainHeading from "../Components/mainHeading";
import ProjectData from "../Components/ProjectData";
import Link from "next/link";
import { PiArrowSquareUpRightLight } from "react-icons/pi";
function Projects() {
  return (
    <div id="Projects" className="section">
      <MainHeading text1="Latest" text2="Projects" 
      textSize="projectHead text-[2.3rem] pt-4 -ml-28"
      />
      <div className="-mt-4 project-container flex p-4 gap-3 justify-center max-w-full flex-wrap ">
      <ProjectData
          tittle="Couch Web Hakhaton"
          projectImage="/projectImages/Hakhaton Challenge.png"
          projectName="Couch Website"
          description="A fully responsive couch website built in 24 hours during a GIAIC hackathon, inspired by a Figma design."
          projectWebLink="https://hakhaton-ecommerece-website.vercel.app/"
          index={1}
        />
        <ProjectData
          tittle="Practice Hakhaton"
          projectImage="/projectImages/Practice-Ecommerece-Hakhaton.png"
          projectName="Figma E-Commerce"
          description="A sleek e-commerce site built with Next.js, featuring dynamic pages, responsive design, and inspired by a Figma prototype."
          projectWebLink="https://practice-hakhaton-2.vercel.app/"
          index={2}
        />
        <ProjectData
          tittle="Resume Builder"
          projectImage="/projectImages/resumeImage.jpeg"
          projectName="Resume Builder"
          description="A sleek, Streamlined Design Resume Builder website using HTML, CSS, and TypeScript for quick and customizable resume creation."
          projectWebLink="https://dyamic-cv-maker.vercel.app/" index={3}        />
        <ProjectData 
          tittle="Carmella App"
          projectImage="/projectImages/carmellaApp.jpeg"
          projectName="Carmella App"
          description="A Next.js web app dashboard displaying subject cards (Math, English) by grade and topic, with quick-access icons for Students, Polls, Work, Reports, and Settings."
          projectWebLink="https://carmella-app-react.netlify.app/" index={4}        />
        <ProjectData 
          tittle="Doc Mini App"
          projectImage="/projectImages/docMiniApp.jpeg"
          projectName="Doc Mini App"
          description="This Web App is made with Next.js, features smooth drag-and-drop and seamless animations for an interactive experience"
          projectWebLink="https://doc-mini-app.netlify.app/" index={5}        />
        <ProjectData 
          tittle="TodoList"
          projectImage="/projectImages/todolist.jpg"
          projectName="TaskMaster"
          description="It is a sleek and modern to-do list app that allows you to easily add, view, and delete tasks. Stay organized and boost your productivity with its intuitive interface!"
          projectWebLink="https://react-todolist-tailwind.netlify.app/" index={6}        />
      </div>
      <div className="flex justify-center pt-3 pb-9">
<Link href="/More_Projects">
      <button className="btn text-[16px] bg-hoverColor rounded-full px-4 py-[9px] font-semibold shadow-custom tracking-wide text-black hover:bg-zinc-900 hover:text-white"><span className="flex items-center">See More <i className=" text-[27px] "><PiArrowSquareUpRightLight/></i></span>
          </button>
</Link>
      </div>
    </div>
  );
}

export default Projects;
