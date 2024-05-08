import React from "react";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import QnA from "../components/QnA";
import MainHome from "../components/MainHome";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 p-6">
        <header>
          <Appbar></Appbar>
        </header>
        <div>
          <MainHome></MainHome>
        </div>
        <div>
          <QnA></QnA>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
