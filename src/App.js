import React, { useEffect, useState } from "react";
import "./App.css";
import { secrets } from "./secrets";

const App = () => {
  const [value, setValue] = useState("");
  const [recipes, setRecipes] = useState(null);

  console.log(recipes);

  const API_ID = secrets.API_ID;
  const API_KEY = secrets.API_KEY;

  useEffect(() => {
    getRecipes();
  });

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    // console.log(data.hits);
    setRecipes(data.hits);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const id = Math.random().toString().replace("0.", "");

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="search__input"
        />
        <button type="submit" className="search__submit">
          Search
        </button>
      </div>
      <div className="body">
        {recipes &&
          recipes.length > 0 &&
          recipes.map((r) => {
            return (
              <div key={id}>
                <img src={r.recipe.image} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
