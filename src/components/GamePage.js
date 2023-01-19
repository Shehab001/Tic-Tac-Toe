import React from "react";
import "./style.css";

const GamePage = () => {
  return (
    <div>
      <img
        className="ml-10 mt-5 cursor-pointer"
        src="https://img.icons8.com/android/24/null/back.png"
        alt="icon"
      ></img>
      <h1 className="gp">Game With Tanmay</h1>
      <h1 className="gp1 ml-3">Your piece</h1>
      <img
        className="gp2 ml-3"
        src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1674126267/icons8-multiply-96-removebg-preview_1_zsisd3.png"
        alt="icon"
      ></img>

      <div className="gp3 text-black mx-5 md:left-1/3">
        <p className="pt-3">Your Move</p>
      </div>

      {/* field */}

      <div className="gp4 ml-2 -mt-3 md:left-1/3">
        <div className="grid grid-cols-3 w-full mx-auto gp5 ">
          <div className="border-r-4 border-b-4"></div>
          <div className="border-b-4"></div>
          <div className="border-b-4 border-l-4"></div>
          <div className=" border-b-4 border-r-4"></div>
          <div className="border-b-4"></div>
          <div className="border-b-4 border-l-4 "></div>
          <div className="border-r-4"></div>
          <div className=""></div>
          <div className="border-l-4"></div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
