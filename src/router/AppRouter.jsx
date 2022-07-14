import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Home from "../pages/Home/Home";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};

export default AppRouter;
