import React from "react";

const RecipeCard = (data) => {
  console.log(data.data.recipe);

  const { image, label } = data.data.recipe;

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{label}</h5>
          <a href="#" className="btn btn-primary d-block mx-auto w-75">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
