import React from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="w-75 mt-2 " onSubmit={() => navigate("/home")}>
        <div className="form-group text-center">
          <label className="display-6  mb-2" htmlFor="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            className="form-control mb-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group text-center">
          <label className="display-6 mb-2" for="exampleInputPassword1">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary d-block mx-auto mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
