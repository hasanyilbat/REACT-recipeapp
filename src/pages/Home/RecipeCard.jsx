import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const RecipeCard = ({ data }) => {
  console.log(data.recipe);

  const { image, label } = data.recipe;

  const navigate = useNavigate();
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{label}</h5>
          <button
            to="/details"
            className="btn btn-primary d-block mx-auto w-75"
            onClick={() => navigate("/details", { state: data })}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
