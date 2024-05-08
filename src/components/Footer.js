import React from "react";
import copyright from "../assets/copyright.svg";

const Footer = () => {
  return (
    <div className="rounded-[40px] bg-[#F5F5F5] p-12">
      <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
        <div className="flex gap-2 items-center">
          <img src={copyright} alt="copyright"></img>
          <span>Talup 2023. All rights reserved</span>
        </div>
        <div className="flex gap-5">
          <a className="underline font-normal cursor-pointer">
            Terms & Conditions
          </a>
          <a className="underline font-normal cursor-pointer">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
