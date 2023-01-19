import React from "react";
import "./style.css";

const HomeNewUser = () => {
  return (
    <div>
      <img
        className="-ml-5 -mt-5 cursor-pointer"
        src="https://img.icons8.com/android/24/null/back.png"
        alt="icon"
      ></img>
      <h1 className="hnu">Start A New Game</h1>
      <h1 className="hnu1 -ml-3">Whom Do You Want To Play?</h1>

      <label className="hnu2" htmlFor="email">
        Email :
      </label>
      <br></br>
      <input
        className="hnu3"
        type="email"
        id="email"
        name="email"
        placeholder="Type Your Email Here"
      ></input>

      <input
        className="hnu4 m-5 text-white cursor-pointer"
        type="submit"
        value="Start Game"
      ></input>
    </div>
  );
};

export default HomeNewUser;
