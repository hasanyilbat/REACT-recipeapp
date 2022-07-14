import React from "react";
import Nav from "../../components/navbar/Nav";
import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const APP_KEY = "42ec21d10b48b70179a2d724f7bcfb4d";
  const APP_ID = "2e997a7c";

  const [data, setData] = useState("");
  const [query, setQuery] = useState(" ");
  const [meal, setMeal] = useState(" ");

  const handleSubmit = (e) => {
    console.log(query);
    console.log(meal);
    e.preventDefault();
    getDataFromApi();
  };

  const getDataFromApi = async () => {
    const dataFromApi = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
    );
    setData(dataFromApi.data.hits);
  };

  console.log(data);
  return (
    <div>
      <Nav />
      <h1 className="text-center mt-4">Food App</h1>
      <div className="submit-Container">
        <form className="homeSubmit" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="meal"
              placeholder="Meal"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setMeal(e.target.value)}
          >
            <option value="">Choose</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </select>
        </form>
      </div>

      {data && data.map((food) => <RecipeCard data={food} />)}
    </div>
  );
};

export default Home;