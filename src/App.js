import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./assets/API.json";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = api.APP_ID;
  const APP_KEY = api.APP_KEY;

  const reqUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);
  // Parametre olarak "[]" verildiği için sadece bir kez çalışır. Parametre silinirse sayfadaki her değişiklikte çalışır.

  // Tarifleri API'den getirmek için;
  const getRecipes = async () => {
    const response = await fetch(reqUrl);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-input" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
