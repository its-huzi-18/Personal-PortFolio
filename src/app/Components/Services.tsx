import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { PiBracketsAngleBold } from "react-icons/pi";
import ShowMoreText from "./ShowMoreText";
import ServiceCards from "./ServiceCards";
import { TbWorldSearch } from "react-icons/tb";

function Services() {
  const text: string = "";

  return (
    <>
    
      <div className=" flex flex-col pb-10">
        <div>
          <h2 className="servicesH2 my-9 text-5xl text-center font-extrabold cardBottom">
            My <span className="text-hoverColor">Services</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="cardDiv justify-center flex-wrap flex py-6 gap-16 cardTop">
            <ServiceCards
              icon={<PiBracketsAngleBold />}
              title="UI/UX Design"
              description={
                <ShowMoreText text="Designing intuitive and engaging UI/UX that combines style with functionality. I create user-centered, visually appealing interfaces that elevate experiences and meet user needs. Let’s turn your ideas into impactful, memorable digital designs." />
              }
            />
            <ServiceCards
              icon={<FaLaptopCode />}
              title="WebDev"
              description={
                <ShowMoreText
                  text="Elevate your online presence with custom web solutions designed
                to reflect your unique vision. I create visually appealing
                websites that ensure an exceptional user experience
                helping you stand out in the digital landscape."
                />
              }
            />
            <ServiceCards
              icon={<TbWorldSearch />}
              title="SEO Amplify"
              description={
                <ShowMoreText text="Dominate search results and attract qualified leads with our proven SEO strategies. Our tailored approach enhances your online visibility, connects you with your target audience, and turns clicks into conversions." />
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
