import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

function Icons() {
  return (
    <div>
      <ul className='iconDiv flex gap-5'>
        <li>
          <Link href="https://www.facebook.com/HuzaifaWH2021" target="_blank">
            <FaFacebookF size={40} className="socialIcons custom-i-6 text-hoverColor transition duration-500 bg-transparent rounded-full border-2 border-hoverColor p-2 hover:bg-hoverColor hover:text-black hover:shadow-iconsShadow" />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/its_huzi_18/?utm_source=qr&igsh=N3I5bmZ0Y2NuaTNk" target="_blank">
            <FaInstagram size={40} className="socialIcons custom-i-7 text-hoverColor transition duration-500 bg-transparent rounded-full border-2 border-hoverColor p-2  hover:bg-hoverColor hover:text-black hover:shadow-iconsShadow" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/huzaifa-wahab-1137432ba/" target="_blank">
            <FaLinkedinIn size={40} className="socialIcons custom-i-8 text-hoverColor transition duration-500 bg-transparent rounded-full border-2 border-hoverColor p-2  hover:bg-hoverColor hover:text-black hover:shadow-iconsShadow"/>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/its-huzi-18" target="_blank">
            <FiGithub size={40} className="socialIcons custom-i-9 text-hoverColor transition duration-500 bg-transparent rounded-full border-2 border-hoverColor p-2  hover:bg-hoverColor hover:text-black hover:shadow-iconsShadow" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Icons;
