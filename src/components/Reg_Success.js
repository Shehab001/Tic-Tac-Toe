import React from "react";

const Reg_Success = () => {
  return (
    <div>
      <div className="container mx-10 mt-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill=""
            className="w-7 h-7 -ml-5 -mt-5"
          >
            <path
              fillRule="evenodd"
              d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
              clipRule="evenodd"
            />
          </svg>
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

export default Reg_Success;
