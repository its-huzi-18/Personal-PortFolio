import React from 'react';

interface HeadingProps {
    text1: string;
    text2: string;
    textSize?: string;  // Optional prop with a default value
}

const MainHeading: React.FC<HeadingProps> = ({ text1, text2, textSize = 'text-[2.7rem]' }) => {
  return (
    <div>
      <h2 className={`cardBottom my-9 ${textSize} text-center font-extrabold`}>
        {text1} <span className="text-hoverColor">{text2}</span>
      </h2>
    </div>
  );
};

export default MainHeading;
