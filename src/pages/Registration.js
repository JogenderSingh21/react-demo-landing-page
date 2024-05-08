import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import close from "../assets/close.svg";
import error from "../assets/error.svg";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import SquigglyHeading from "../components/SquigglyHeading";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (email !== "" && name !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email]);

  const register = () => {
    if (
      !email
        .toString()
        .toLowerCase()
        .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      console.log("no success");
      setIsEmailValid(false);
    } else {
      console.log("success");
      navigate("/successfully-registered");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col h-dvh">
      <div className="py-6 px-12 z-10">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt={"Brunel"}></img>
          </div>
          <button
            onClick={handleClose}
            className="p-3.5 border border-[#CACACA] hover:bg-[#F1F1F1] rounded-full duration-300 "
          >
            <img src={close} alt="close"></img>
          </button>
        </div>
      </div>
      <div className="absolute w-dvw h-dvh flex justify-center items-center">
        <div className="max-w-xl space-y-10">
          <div className="text-center space-y-1">
            <SquigglyHeading text={"Registration Form"}></SquigglyHeading>
            <h1 className="text-5xl font-semibold leading-[1.2]">
              Start your success Journey here!
            </h1>
          </div>
          <div>
            <div class="max-w-96 mx-auto space-y-7">
              <div>
                <div className="space-y-[1.3rem]">
                  <InputBox
                    placeholder={"Enter your name"}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></InputBox>
                  <InputBox
                    placeholder={"Enter your email"}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></InputBox>
                </div>
                <div
                  className={`${isEmailValid ? "hidden" : "flex"} pt-2 gap-3`}
                >
                  <img src={error} alt="error" />
                  <div className="text-sm text-[#FF0808] font-medium">
                    Enter a valid email address
                  </div>
                </div>
              </div>
              <Button
                isDisabled={isDisabled}
                onClick={register}
                variant={"primary"}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
