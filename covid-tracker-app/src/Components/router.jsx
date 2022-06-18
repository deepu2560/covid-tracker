// importing required tools
import { Route, Routes } from "react-router-dom";

// importing LoginSignup and HomePage function to render them on screen
import { LoginSignup } from "./Pages/auth";
import { HomePage } from "./Pages/home";

// Allroutes function and exporting them
export const Allroutes = () => {
  return (
    /*Routes contains all required routes */
    <Routes>
      {/* Routes with path address and elment which will render on screen */}
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<LoginSignup />} />
    </Routes>
  );
};
