import React from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="w-75 mt-2 " onSubmit={() => navigate("/home")}>
        <div class="form-group text-center">
          <label className="display-6  mb-2" for="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            class="form-control mb-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group text-center">
          <label className="display-6 mb-2" for="exampleInputPassword1">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" class="btn btn-primary d-block mx-auto mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
