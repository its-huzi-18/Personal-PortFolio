"use client"
import React from "react";
import Image from "next/image";
import { PiArrowSquareUpRightLight } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";

interface ImagesProps {
  projectImage: string;
  projectName: string;
  description: string;
  projectWebLink: string;
  tittle: string;
  index: number;  // Added index to control the animation delay
}

const ImagesProp: React.FC<ImagesProps> = ({ 
  projectImage, 
  projectName, 
  description, 
  projectWebLink, 
  tittle, 
  index 
}) => {
  return (
    <motion.div
      className="projectContainer mx-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}  // Sequential animation delay
    >
      <div className="projectImg shadow-custom rounded-lg">
        <div className="imageDiv w-full h-full overflow-hidden relative mb-3">
          <Image
            className="object-fill rounded-lg h-[13.5rem] projectImg"
            src={projectImage}
            width={300}
            height={300}
            alt="my project"
          />
          <div className="layer absolute top-0 bottom-0 bg-customBg backdrop-blur-sm w-full h-full rounded-lg p-4">
            <h3 className="layerName  -mt-2 text-[28px] text-center ">{projectName}</h3>
            <p className="layerText -mt-[5px] text-center p-1 text-[0.97rem]">
              {description}
            </p>
            <Link href={projectWebLink} target="_blank">
              <div className="text-center object-fill iconCover w-[44px] h-[44px] rounded-full bg-white p-2 mx-[40%]">
                <i className=" layerIcon text-[29px] font-extrabold text-black">
                  <PiArrowSquareUpRightLight />
                </i>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <p className="projectText font-bold text-center text-xl">{tittle}</p>
    </motion.div>
  );
};

export default ImagesProp;
