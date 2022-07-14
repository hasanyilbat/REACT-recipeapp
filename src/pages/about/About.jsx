import React from "react";
import Nav from "../../components/navbar/Nav";
const about = () => {
  return (
    <div>
      <Nav />
      <div className="about-me">
        <img
          src="https://www.pngkey.com/png/full/843-8432184_software-developer-png-pluspng-software-engineer-png-icon.png"
          alt=""
        />
        <div className="about-info">
          <p className="text-danger">
            About Software Developer{" "}
            <span className="display-5 text-primary">Hasan YILBAT</span>
          </p>
          <div>
            <p> I'm Hasan.</p>
            <p>I'm currently learning Full-Stack Devolopment Languages.</p>
            <p>I've already knows JS, ReactJS, Python, AWS Services</p>
            <p>Send email: hasan.yilbat@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
