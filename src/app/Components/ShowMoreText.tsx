import React, { useState } from 'react';

// Define the props interface
interface ShowMoreTextProps {
  text: string; 
  limit?: number; 
  buttonStyles?: string; 
}

const ShowMoreText: React.FC<ShowMoreTextProps> = ({ text, limit = 160, buttonStyles = 'text-[14px] px-2 py-[4px] w-24'}) => { // Default limit is set to 160 and default button styles
  const [isExpanded, setIsExpanded] = useState<boolean>(false); 

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.slice(0, limit)}...`} 
      </p>
      <button
        onClick={toggleExpand}
        className={`btn my-3 bg-hoverColor rounded-full ${buttonStyles} font-semibold shadow-custom tracking-wide text-black hover:bg-secondBg cursor-pointer hover:text-white`}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default ShowMoreText;
