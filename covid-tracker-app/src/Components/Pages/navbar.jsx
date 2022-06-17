import React from "react";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import SearchIcon from "@mui/icons-material/Search";

import "../Styles/navbar.css";

export const Navbar = () => {
  return (
    <div id="navbar-main-div">
      <div id="navbar-logo-div">
        <CoronavirusIcon className="navbar-logo-icon"></CoronavirusIcon>
        <h2 data-text="COVID TRACKER" id="navbar-logo-text">
          COVID TRACKER
        </h2>
      </div>
      <div id="navbar-search-div">
        <input type="text" />
        <button>
          <SearchIcon></SearchIcon>
        </button>
      </div>
      <div id="navbar-auth-side-div">
        <button>Hey! deepu2560</button>
        <button>SIGN IN</button>
      </div>
    </div>
  );
};
