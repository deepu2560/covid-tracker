import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "../Styles/auth.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  logInLoading,
  logInFailure,
  logInSuccess,
  signUpLoading,
  signUpFailure,
  signUpSuccess,
} from "../Redux/authRedux/atuhAction";
import axios from "axios";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

export const LoginSignup = () => {
  document.body.style.background = "none";
  document.body.style.background =
    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";

  const [login, setlogin] = useState(true);
  const [remember, setremember] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sampleSignin = {
    username: "",
    password: "",
  };

  const sampleSignup = {
    username: "",
    password: "",
    email: "",
    name: "",
  };

  const { isAuth } = useSelector((state) => state.auth);

  const [signinData, setsigninData] = useState(sampleSignin);

  const [signupData, setsignupData] = useState(sampleSignup);

  function handleSigninChanges({ target }) {
    const { name, value } = target;

    setsigninData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSignupChanges({ target }) {
    const { name, value } = target;

    setsignupData((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    let user = cookies.covidUserId;

    if (user) {
      dispatch(logInSuccess(user));
      navigate("/");
    }
  }, []);

  function signinSubmit() {
    dispatch(logInLoading());
    console.log("==> logging in");

    setTimeout(() => {
      axios
        .post("https://deep-covid-tracker.herokuapp.com/auth/login", signinData)
        .then((res) => {
          let { error, token } = res.data;
          if (error) {
            dispatch(logInFailure());
          } else {
            dispatch(logInSuccess(token));
            if (remember) {
              setCookie("covidUserId", token, { path: "/" });
            }
            console.log("==> logged in");
            setTimeout(() => {
              navigate("/");
              console.clear();
            }, 100);
          }
        })
        .catch((err) => {
          dispatch(logInFailure());
          alert("Something went wrong try again");
        });
    }, 2000);
  }

  function signupSubmit() {
    dispatch(signUpLoading());
    setTimeout(() => {
      axios
        .post(
          "https://deep-covid-tracker.herokuapp.com/auth/register",
          signupData,
        )
        .then((res) => {
          let { error, token } = res.data;
          if (error) {
            dispatch(signUpFailure());
          } else {
            dispatch(signUpSuccess(token));
            console.log(token);
            alert("You are successfully registered. Log in now");
            setTimeout(() => {
              console.clear();
            }, 100);
          }
        })
        .catch((err) => {
          dispatch(signUpFailure());
          alert("Something went wrong try again");
        });
    }, 2000);
  }

  return (
    <div>
      <div id="home-navbar-main">
        <div id="navbar-logo-div">
          <CoronavirusIcon className="navbar-logo-icon"></CoronavirusIcon>
          <h2 data-text="COVID TRACKER" id="navbar-logo-text">
            COVID TRACKER
          </h2>
        </div>
        <Button
          variant="outlined"
          id="home-navbar-log-in"
          onClick={() => navigate("/")}
        >
          HOME
        </Button>
      </div>
      <div id="login-signup-component">
        <div id="login-signup-main">
          <div id="login-signup-heading">
            <p
              style={{ borderTopLeftRadius: "10px" }}
              onClick={() => setlogin(true)}
            >
              Sign In
            </p>
            <p
              style={{ borderTopRightRadius: "10px" }}
              onClick={() => setlogin(false)}
            >
              Sign Up
            </p>
          </div>
          {login === true ? (
            <div id="login-main">
              <h1>SIGN IN HERE</h1>
              <form style={{ marginBottom: "5px" }}>
                <label className="signin-label">USERNAME</label>
                <br />
                <input
                  type="text"
                  name="username"
                  defaultValue=""
                  placeholder="ENTER USERNAME HERE..."
                  className="signin-input"
                  onChange={(event) => handleSigninChanges(event)}
                />
                <br />

                <label className="signin-label">PASSWORD</label>
                <br />
                <input
                  type="password"
                  name="password"
                  defaultValue=""
                  placeholder="ENTER PASSWORD HERE..."
                  className="signin-input"
                  onChange={(event) => handleSigninChanges(event)}
                />
              </form>
              <br />
              <div id="remember-main-div">
                <input
                  type="checkbox"
                  onChange={() => {
                    if (remember == false) {
                      setremember(() => true);
                      return;
                    }
                    setremember(() => false);
                  }}
                />
                <p>REMEMBER ME</p>
              </div>
              <br />
              <button id="signin-button" onClick={() => signinSubmit()}>
                SIGN IN
              </button>
            </div>
          ) : (
            <div id="signup-main">
              <h1>SIGN UP HERE</h1>
              <form style={{ marginBottom: "5px" }}>
                <label className="signin-label">USERNAME</label>
                <br />
                <input
                  type="text"
                  name="username"
                  placeholder="ENTER USERNAME HERE..."
                  className="signin-input"
                  defaultValue=""
                  onChange={(event) => handleSignupChanges(event)}
                />
                <br />
                <label className="signin-label">FULL NAME</label>
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="ENTER NAME HERE..."
                  className="signin-input"
                  defaultValue=""
                  onChange={(event) => handleSignupChanges(event)}
                />
                <br />
                <label className="signin-label">EMAIL ID</label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="ENTER EMAIL HERE..."
                  className="signin-input"
                  defaultValue=""
                  onChange={(event) => handleSignupChanges(event)}
                />
                <br />
                <label className="signin-label">PASSWORD</label>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="ENTER PASSWORD HERE..."
                  className="signin-input"
                  defaultValue=""
                  onChange={(event) => handleSignupChanges(event)}
                />
              </form>
              <br />
              <button id="signin-button" onClick={() => signupSubmit()}>
                SIGN UP
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
