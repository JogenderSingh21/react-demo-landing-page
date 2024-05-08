import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import Banner from "./Banner";
import Button from "./Button";
import arrow from "../assets/arrow.svg";
import SquigglyHeading from "./SquigglyHeading";

const MainHome = () => {
  const navigate = useNavigate();

  const slides = [
    {
      data: "Enhance fortune 50 company’s insights teams research capabilities",
    },
    {
      data: "Strengthen Fortune 50 insights team research for strategic advantage",
    },
    {
      data: "Empower Fortune 50 insights teams with enhanced research capabilities",
    },
  ];

  const handleRegister = () => {
    navigate("/registration");
  };
  return (
    <div className="mb-28">
      <div className="flex flex-col gap-2 items-center my-14">
        <SquigglyHeading text={"Success stories"}></SquigglyHeading>
        <h1 className="text-5xl font-semibold leading-[1.2] max-w-[40rem] text-center">
          Every success journey we’ve encountered.
        </h1>
      </div>
      <div className="flex px-8 py-6 flex-wrap xl:flex-nowrap">
        <Banner></Banner>
        <div className="grow flex flex-col items-center pt-16 pl-16">
          <Carousel slides={slides}></Carousel>
          <div className="w-96">
            <div className="w-fit pt-10">
              <Button onClick={handleRegister} variant="primary">
                <div className="flex gap-3.5">
                  <span>Explore More</span>
                  <img src={arrow}></img>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
