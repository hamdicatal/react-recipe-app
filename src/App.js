import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import api from './assets/API.json';

const App = () => {

    const APP_ID = api.APP_ID;
    const APP_KEY = api.APP_KEY;

    const reqUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect(() => {
        getRecipes();
    }, []);
    // Parametre olarak "[]" verildiği için sadece bir kez çalışır. Parametre silinirse sayfadaki her değişiklikte çalışır.

    // Tarifleri API'den getirmek için;
    const getRecipes = async () => {
        const response = await fetch(reqUrl);
        const data = await response.json();
        console.log(data);
    };

  return(
      <div className="App">
       <form className="search-form">
       <input className="search-input" type="text"/>
        <button className="search-button" type="submit">Search</button>
       </form>
      </div>
  );
}

export default App;
