// importing all required liberaries
import React, { useState } from "react";

// importing css file for this filea and all routes file
import "./App.css";
import { Allroutes } from "./Components/router";

// App function which will be rendered to main screen
function App() {
  return (
    <div className="App">
      {/* All routes funciton applied here it will manage all routes */}
      <Allroutes />
    </div>
  );
}

// exporting App function
export default App;
