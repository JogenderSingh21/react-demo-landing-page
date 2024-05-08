import React, { useState } from "react";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

const QnA = () => {
  const questions = [
    "Do you offer freelancers?",
    "What’s the guarantee that I will be satisfied with the hired talent?",
    "Can I hire multiple talents at once?",
    "Why should I not go to an agency directly?",
    "Who can help me pick a right skillset and duration for me?",
  ];
  const answer =
    "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.";

  return (
    <div className="relative rounded-[40px] bg-[#E8EEE7] overflow-hidden">
      <div className="absolute top-48 left-0 w-[28rem] h-[28rem] bg-cover bg-no-repeat bg-qna-bg rounded-tr-[200px]"></div>
      <div className="grid grid-cols-2 gap-20">
        <div className="ml-20 mt-16 flex flex-col">
          <h3 className="font-covered text-3xl text-[#9E9D9D] ">
            What’s on your mind
          </h3>
          <h2 className="text-[3.5rem] font-semibold">Ask Questions</h2>
        </div>
        <div>
          <div className="flex flex-col divide-y divide-[#D7D7D7] mt-24 mr-16 mb-10">
            {questions.map((ques, index) => {
              return (
                <Questions key={index} ques={ques} answer={answer}></Questions>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Questions = ({ ques, answer }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="pb-1 pt-8 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="text-[20px] font-semibold w-[70%]">{ques}</div>
        <div className="flex justify-center">
          <button onClick={toggleShow} className="w-[14px] h-[14px]">
            <img
              src={show ? minus : plus}
              alt="expand"
              className="transition-transform duration-500 transform"
              style={{ transform: show ? "rotate(180deg)" : "rotate(90deg)" }}
            />
          </button>
        </div>
      </div>
      <div
        className={`text-[16px] text-[#617275] overflow-hidden transition-max-h duration-500 transition-all ${
          show ? "max-h-screen" : "max-h-0"
        }`}
      >
        {show && <div className="mt-3">{answer}</div>}
      </div>
    </div>
  );
};

export default QnA;
