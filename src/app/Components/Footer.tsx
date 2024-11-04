import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex justify-between items-center flex-wrap py-3 px-[9%] bg-secondBg">
      <div>
        <p className="footerText text-xl">
          Copyright &copy; 2024 by Huzaifa | All Rights Reserved.
        </p>
      </div>
      <div>
        <Link
          className="inline-flex justify-center items-center p-3 bg-hoverColor rounded-xl hover:shadow-custom "
          href="#home"
        >
          <i className="footIcon cardTop  text-2xl text-secondBg">
            <FaArrowUp />
          </i>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
