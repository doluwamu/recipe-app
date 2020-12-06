import React, { useEffect, useState } from "react";
import "./App.css";
import { secrets } from "./secrets";

const App = () => {
  const [value, setValue] = useState("");
  const [recipes, setRecipes] = useState(null);
  console.log(recipes[0]);

  const API_ID = secrets.API_ID;
  const API_KEY = secrets.API_KEY;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    return setRecipes(data.hits);
    // console.log(data.hits);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

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
      <div className="body">{recipes && recipes.map((r) => {})}</div>
    </div>
  );
};

export default App;
