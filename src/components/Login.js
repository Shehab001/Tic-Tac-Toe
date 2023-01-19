import React from "react";

const Login = () => {
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
          <h1 className="ca text-left">Login</h1>
          <h1 className="content text-left">Please Enter Your Details</h1>
        </div>

        <div className="signup">
          <form action="">
            <label className="l1" htmlFor="username">
              User Name :
            </label>
            <br></br>
            <input
              className="i1"
              type="text"
              id="username"
              name="username"
              placeholder="Type Your User Name Here"
            ></input>
            <label className="l2" htmlFor="pwd">
              Password :
            </label>
            <br></br>
            <input
              className="i2"
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Type Your Password Here"
            ></input>
            <br></br>

            <br></br>
            <input
              className="success my-5 ml-1 text-white cursor-pointer bg-red-800"
              type="button"
              value="Enter Correct Details."
            ></input>
            <br></br>
            <input
              className="register m-5 text-white cursor-pointer"
              type="submit"
              value="Login"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
