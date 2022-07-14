import React from "react";
import Nav from "../../components/navbar/Nav";
import { useLocation } from "react-router-dom";

const Details = () => {
  const state = useLocation();
  console.log(state.state.recipe);

  const {
    label,
    totalNutrients,
    totalWeight,
    calories,
    digest,
    ingredientLines,
    image,
  } = state.state.recipe;

  console.log(state.state.recipe);

  return (
    <div>
      <Nav />
      <div>
        <div className="header">
          <h1 className="text-center">{label}</h1>
          <img
            src="http://www.thelogomix.com/files/imagecache/v3-logo-detail/400_11.gif"
            alt=""
          />
        </div>

        <div className="food-Recipe-Info">
          <div className="info">
            <p>Nutrients</p>
            <p>
              {totalNutrients.CA.label}: {totalNutrients.CA.quantity.toFixed()}
              {totalNutrients.CA.unit}
            </p>
            <p>
              {totalNutrients.CHOCDF.label}:{" "}
              {totalNutrients.CHOCDF.quantity.toFixed(0)}
              {totalNutrients.CHOCDF.unit}
            </p>
            <p>
              {totalNutrients.CHOLE.label}:{" "}
              {totalNutrients.CHOLE.quantity.toFixed(0)}
              {totalNutrients.CHOLE.unit}
            </p>
            <p>
              {" "}
              {totalNutrients.ENERC_KCAL.label}:{" "}
              {totalNutrients.ENERC_KCAL.quantity.toFixed(0)}
              {totalNutrients.ENERC_KCAL.unit}
            </p>
            <p>{totalWeight}</p>
            <p>Calories: {calories.toFixed(0)}</p>
            <p>
              {digest[0].label}: {digest[0].total.toFixed(0)}
            </p>
            <p>
              {" "}
              {digest[1].label}: {digest[1].total.toFixed(0)}
            </p>
            <p>
              {digest[2].label}: {digest[2].total.toFixed(0)}
            </p>
            <p>
              {" "}
              {digest[3].label}: {digest[3].total.toFixed(0)}
            </p>
          </div>
          <div className="img">
            {" "}
            <img src={image} alt="" />
          </div>
          <div className="recipe">
            {ingredientLines.map((item, key) => {
              return (
                <p>
                  {key + 1}- {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
