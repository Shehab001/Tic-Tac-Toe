import React from "react";
import "./style.css";

const NewGame = () => {
  return (
    <div>
      <h1 className="ng">Your Games</h1>
      <h1 className="ng1">No Games Found</h1>

      <input
        className="success my-5 ml-1 text-white cursor-pointer ng3"
        type="button"
        value="Start A New Game"
      ></input>
    </div>
  );
};

export default NewGame;
