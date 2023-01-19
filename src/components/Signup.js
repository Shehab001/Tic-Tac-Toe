import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";

// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Loader from "../Loader";
import "./style.css";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
// import app from "../firebase/Firebase.config";
import { AuthContext } from "../Context/Context";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [spinn, setSpinn] = useState(false);

  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const from = location.state?.from?.pathname || "/";

  const handleForm = (event) => {
    //alert("hi");
    setSpinn(true);
    event.preventDefault();

    setSuccess(false);

    const form = event.target;

    const nam = form.nam.value;
    const name = form.email.value;
    const pass = form.password.value;
    const url = form.url.value;
    //console.log(name, pass, nam, url);

    if (pass.length < 6) {
      setError("Password should be 6 characters or more.");
      return;
    }

    createUser(name, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        setSuccess(true);
        form.reset();
        setError("");
        // navigate(from, { replace: true });
        handleUpdateUserProfile(nam, url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  const handleUpdateUserProfile = (nam, url) => {
    const profile = {
      displayName: nam,
      photoURL: url,
    };
    console.log(profile);
    updateUserProfile(profile)
      .then(() => setSpinn(false))
      .catch((error) => console.error(error));
  };

  return (
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
          <label className="l3" htmlFor="email">
            Email :
          </label>
          <br></br>
          <input
            className="i3"
            type="email"
            id="email"
            name="email"
            placeholder="Type Your Email  Here"
          ></input>
          <label className="l4" htmlFor="pwd">
            Password :
          </label>
          <br></br>
          <input
            className="i4"
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Type Your Password Here"
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
  );
};

export default Signup;
