import React from "react";
import "./style.css";

const RegSuccess = () => {
  return (
    <div>
      <div className="container mx-10 mt-10">
        <div>
          <img
            className="-ml-5 -mt-5 cursor-pointer"
            src="https://img.icons8.com/android/24/null/back.png"
            alt="icon"
          ></img>
        </div>
        <div className="heading">
          <h1 className="ca text-left">Create Account</h1>
          <h1 className="content text-left">Let's Get To Know You Better</h1>
        </div>

        <div className="signup">
          <form action="">
            <label className="l1" htmlFor="yourname">
              Your Name :
            </label>
            <br></br>
            <input
              className="i1"
              type="text"
              id="yourname"
              name="yourname"
              placeholder="Type Your Name Here"
            ></input>
            <label className="l2" htmlFor="username">
              Username :
            </label>
            <br></br>
            <input
              className="i2"
              type="text"
              id="username"
              name="username"
              placeholder="Type Your UserName Here"
            ></input>
            <br></br>
            <label className="l3" htmlFor="pwd">
              Password :
            </label>
            <br></br>
            <input
              className="i3"
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Type Your Password Here"
            ></input>
            <br></br>
            <input
              className="success my-5 ml-1 text-white cursor-pointer"
              type="button"
              value="Congratulations!!! Account created."
            ></input>
            <br></br>
            <input
              className="register m-5 text-white cursor-pointer"
              type="submit"
              value="Register"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegSuccess;
