import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectTimer = ({ time }) => {
  const [seconds, setSeconds] = useState(time);

  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds < 0) {
      navigate("/");
    }

    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <div className="fixed bottom-8 w-full text-center text-xl">
      <span className="text-[#727272]">Redirecting you to Homepage in </span>
      <span className="font-bold">{seconds} Seconds</span>
    </div>
  );
};

export default RedirectTimer;
