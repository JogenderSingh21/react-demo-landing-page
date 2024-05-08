import React from "react";
import person from "../assets/person.svg";
import rocket from "../assets/rocket.svg";

const Banner = () => {
  return (
    <div className="relative w-fit">
      <div className="ml-[7.5rem] mr-14 ">
        <img src={person} alt={"person"} className="w-[30rem]" />
      </div>
      <div className="absolute top-24 w-60">
        <TimeStat reduction={40}></TimeStat>
      </div>
      <div className="absolute -bottom-10 right-0 w-[17rem]">
        <ExpenseStat reduction={0.5}></ExpenseStat>
      </div>
      <div className="absolute bottom-12 left-16">
        <Deployment days={10}></Deployment>
      </div>
    </div>
  );
};

const TimeStat = ({ reduction }) => {
  return (
    <div className="drop-shadow-2xl rounded-3xl bg-white p-7 flex flex-col gap-4">
      <h1 className="text-6xl font-face-sw font-medium">{reduction}%</h1>
      <div className="text-[#828282] font-medium leading-[1.3] text-[19px]">
        Achieved reduction in project execution time by optimising team
        availability
      </div>
    </div>
  );
};

const ExpenseStat = ({ reduction }) => {
  return (
    <div className="drop-shadow-2xl rounded-3xl bg-[#002E18] p-8 flex flex-col gap-5 font-medium border border-[#3D3D3D]">
      <div className="flex items-baseline gap-3">
        <h1 className="text-6xl font-face-sw text-white ">${reduction}</h1>
        <div className="text-[#A6A3A0] text-xl">MILLION</div>
      </div>
      <div className="text-[#CCCCCC] leading-[1.3] text-[19px]">
        Reduced client expenses by saving on hiring and employee costs.
      </div>
    </div>
  );
};

const Deployment = ({ days }) => {
  return (
    <div className="rounded-full drop-shadow-2xl bg-white">
      <div className="flex items-center gap-3 py-3.5 px-6">
        <div className="bg-[#DDEFE0] p-2 rounded-full">
          <img src={rocket} alt="" />
        </div>
        <div className="">
          <h3 className="text-xl font-bold">{days} DAYS</h3>
          <div className="text-sm font-medium text-[#828282]">
            Staff Deployment
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
