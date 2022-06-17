import React, { useState, useEffect } from "react";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

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

import "../Styles/navbar.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const { isAuth, token } = useSelector((state) => state.auth);
  const { countrySearch } = useSelector((state) => state.event);

  const [searchInput, setsearchInput] = useState("");

  useEffect(() => {
    let user = cookies.covidUserId;

    if (user) {
      dispatch(logInSuccess(user));
      navigate("/");
    }
  }, []);

  const handleInputChange = ({ value }) => {
    setsearchInput(() => value);
  };

  const handleSearch = () => {
    if (!isAuth || !searchInput) {
      alert("login to search other country");
      return;
    }
    dispatch(searchLoading());
    console.log(searchInput);
    dispatch(searchSuccess(searchInput));
  };

  useEffect(() => {
    finduserName();
  }, [token]);

  const [username, setusername] = useState("");

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

  function handlelogOut() {
    dispatch(logOutLoading());
    dispatch(logOutSuccess());
    console.log("==> loged out");
    removeCookie("covidUserId", { path: "/" });
    console.clear();
    navigate("/");
  }

  return (
    <div id="navbar-main-div">
      <div id="navbar-logo-div">
        <CoronavirusIcon className="navbar-logo-icon"></CoronavirusIcon>
        <h2 data-text="COVID TRACKER" id="navbar-logo-text">
          COVID TRACKER
        </h2>
      </div>
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
