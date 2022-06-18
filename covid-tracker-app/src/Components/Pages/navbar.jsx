// importing required tools
import React, { useState, useEffect } from "react";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

// importing searched country and auth actions
import {
  searchFailure,
  searchLoading,
  searchSuccess,
} from "../Redux/covidTrackerRedux/covidTrackerActions";
import {
  logOutLoading,
  logOutSuccess,
  logInSuccess,
} from "../Redux/authRedux/atuhAction";

// importing stylesheet
import "../Styles/navbar.css";

// main navbar function and exporting it
export const Navbar = () => {
  // navigate and dispatch function
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // cookies
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  // gettin access for isAuth, token, countrySearch from redux
  const { isAuth, token } = useSelector((state) => state.auth);
  const { countrySearch } = useSelector((state) => state.event);

  // state for searched input box
  const [searchInput, setsearchInput] = useState("");

  // checking user in cookies
  useEffect(() => {
    let user = cookies.covidUserId;

    if (user) {
      dispatch(logInSuccess(user));
      navigate("/");
    }
  }, []);

  // input box changes handle function
  const handleInputChange = ({ value }) => {
    setsearchInput(() => value);
  };

  // changing countrysearch in redux
  const handleSearch = () => {
    if (!isAuth || !searchInput) {
      alert("login to search other country");
      return;
    }
    dispatch(searchLoading());
    console.log(searchInput);
    dispatch(searchSuccess(searchInput));
  };

  // calling funciton for getting data of user to show name in navbar
  useEffect(() => {
    finduserName();
  }, [token]);

  // state for user's username
  const [username, setusername] = useState("");

  // function getting data of user
  function finduserName() {
    axios
      .get("https://deep-covid-tracker.herokuapp.com/auth/user", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        let { error, token } = res.data;

        if (error) {
          alert("something went wrong try again");
          navigate("/auth");
        } else {
          setusername(() => token.name);
        }
      });
  }

  // logout funciton handles logout of user
  function handlelogOut() {
    dispatch(logOutLoading());

    dispatch(logOutSuccess());

    console.log("==> loged out");
    removeCookie("covidUserId", { path: "/" });
    console.clear();

    navigate("/");
  }

  console.clear();

  // main navbar
  return (
    // Main navbar div
    <div id="navbar-main-div">
      {/*  left logo div */}
      <div id="navbar-logo-div">
        <CoronavirusIcon className="navbar-logo-icon"></CoronavirusIcon>
        <h2 data-text="COVID TRACKER" id="navbar-logo-text">
          COVID TRACKER
        </h2>
      </div>
      {/* search input box div */}
      <div id="navbar-search-div">
        <input
          type="text"
          placeholder="ENTER COUNTRY NAME..."
          onChange={(event) => handleInputChange(event.target)}
        />
        <button onClick={() => handleSearch()}>
          <SearchIcon></SearchIcon>
        </button>
      </div>
      {/* right buttons div */}
      {isAuth == true ? (
        <div id="navbar-auth-side-div">
          <button>Hey! {username}</button>
          <button onClick={() => handlelogOut()}>SIGN OUT</button>
        </div>
      ) : (
        <div id="navbar-auth-side-div">
          <button onClick={() => navigate("/auth")}>SIGN IN</button>
        </div>
      )}
    </div>
  );
};
