import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode; 
  title: string;         
  description:React.ReactNode;   
  customClass?:string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description}) => {
  return (
    <div className={`cardSize w-[28%] h-[22rem] shadow-custom rounded-md px-6 pt-7 transition-transform duration-300   hover:animate-slide-up`}
    >
      <i className='cardIcon text-hoverColor font-extrabold text-4xl'>{icon}</i>
      <h3 className='cardTittle text-3xl py-2'>{title}</h3>
      <div className='cardLines text-[13px] tracking-wider w-52'>
        {description}
      </div>
    </div>
  );
};

export default ServiceCard;
