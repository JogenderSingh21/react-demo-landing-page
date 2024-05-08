import React from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";

const Appbar = () => {
  return (
    <div className="rounded-full pl-12 pr-4 py-3 border border-[#EAEAEA]">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="Brunel" className="cursor-pointer"></img>
        </div>
        <div className="flex gap-5">
          <div>
            <Button variant={"secondary"}>Get Projects</Button>
          </div>
          <div>
            <Button variant={"primary"}>Onboard Talent</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
