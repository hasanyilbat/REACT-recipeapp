import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Home from "../pages/Home/Home";
import Details from "../pages/details/Details";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        {/* <Route path="*" element= {<notFound/>} */}
      </Routes>
    </>
  );
};

export default AppRouter;
