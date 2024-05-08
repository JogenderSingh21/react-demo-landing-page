import React, { useEffect, useState } from "react";
import success from "../assets/success.svg";
import logo from "../assets/logo.svg";
import SquigglyHeading from "../components/SquigglyHeading";
import RedirectTimer from "../components/RedirectTimer";

const RegisterSuccess = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(true);
  }, []);

  return (
    <div className="flex flex-col h-dvh">
      <div className="py-6 px-12 z-10">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt={"Brunel"}></img>
          </div>
        </div>
      </div>
      <div className="absolute w-dvw h-dvh flex justify-center items-center">
        <div
          className={`max-w-xl space-y-10 flex flex-col items-center transform transition-transform ${
            isZoomed ? "scale-110" : ""
          }`}
        >
          <div>
            <img src={success} alt="success" />
          </div>
          <div className="text-center space-y-3.5">
            <SquigglyHeading text="Successfully Submitted"></SquigglyHeading>
            <h1 className="text-5xl font-semibold">Congratulations</h1>
            <div className="text-[#727272] text-[1.375rem] font-medium pt-2.5">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to your shortly with
              updates
            </div>
          </div>
        </div>
      </div>
      <RedirectTimer time={5}></RedirectTimer>
    </div>
  );
};

export default RegisterSuccess;
