import { Route, Routes } from "react-router-dom";

import { LoginSignup } from "./Pages/auth";
import { HomePage } from "./Pages/home";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<LoginSignup />} />
    </Routes>
  );
};
