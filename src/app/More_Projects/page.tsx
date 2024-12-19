import React from "react";
import ProjectData from "../Components/ProjectData";
import MainHeading from "../Components/mainHeading";
import Cmd from "../Components/Cmd";

function page() {
  return (
    <div className="bg-custom-radial h-screen w-screen overflow-x-hidden">
      <MainHeading
        text1="More"
        text2="Projects"
        textSize="-mt-[1px] text-[2.2rem]"
      />

      <div className="moreProject gap-7 flex justify-center max-w-fit flex-wrap">
      <ProjectData
          tittle="OpenShop"
          projectImage="/projectImages/openShop.png"
          projectName="OpenShop"
          description="A Next.js OpenShop dashboard showing sales, expenses, orders, and customer metrics, with recent orders and popular products."
          projectWebLink="https://openshop-site.netlify.app/"
          index={7}
        />
        <ProjectData
          tittle="PanaCloud Web"
          projectImage="/projectImages/PanaCloud.jpeg"
          projectName="PanaCloud Web"
          description="A portfolio website built using HTML and CSS. This project is part of an assignment for the GAIAC program. It's fully optimized for all devices."
          projectWebLink="https://pana-cloud-portfolio-website.vercel.app/"
          index={8}
        />
        <ProjectData
          tittle="Currency Convertor"
          projectName="Currency Convertor"
          projectImage="/projectImages/Currency Convertor.jpeg"
          projectWebLink="https://currencyconvertorhuzaifa.netlify.app/"
          description="
A simple currency converter built with HTML, CSS, and JavaScript that converts between currencies using real-time exchange rates."
          index={9}
        />
        <ProjectData
          tittle="RPS Game"
          projectName="RPS Game"
          projectImage="/projectImages/RPS.jpeg"
          projectWebLink="https://rock-paper-scissor-huzaifa.netlify.app/"
          description="A basic Rock Paper Scissors game made with HTML, CSS, and JavaScript, where players compete against the computer."
          index={10}
        />
        <ProjectData
          tittle="Myntera clone"
          projectName="Myntera"
          projectImage="/projectImages/myntera.jpeg"
          projectWebLink="https://myntera-clone-ecomerece-website.netlify.app/"
          description="A responsive HTML and CSS clone of the Myntera eCommerce site, featuring a stylish product catalog and intuitive navigation for a seamless shopping experience."
          index={11}
        />
        <ProjectData
          tittle="WebDev Creative"
          projectName="WebDev Craetive"
          projectImage="/projectImages/WebDev.png"
          projectWebLink="https://responsive-frontend-website.netlify.app/"
          description="A creative project featuring a responsive landing page with a sleek navigation bar that adapts to various screen sizes."
          index={12}
        />
        <ProjectData
          tittle="Periodic Table"
          projectName="Periodic Table"
          projectImage="/projectImages/periodic.jpeg"
          projectWebLink="https://the-periodic-table.vercel.app/"
          description="A visually appealing periodic table created with HTML and CSS, showcasing a strong understanding of CSS Grid layout for organizing elements effectively."
          index={13}
        />
        <ProjectData
          tittle="PanaCloud Basic Web"
          projectName="PanaCloud Web"
          projectImage="/projectImages/PanaCloudWeb.jpeg"
          projectWebLink="https://pana-cloud-portfolio.vercel.app/"
          description="A basic web page for panaCloud to practice HTML and CSS. This project focuses on applying foundational concepts, including structured layout."
          index={14}
        />
      </div>
      <Cmd />
    </div>
  );
}

export default page;
