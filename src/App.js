import React from 'react';
import logo from './logo.svg';
import './App.css';
import api from './assets/API.json';

const App = () => {

    const APP_ID = api.APP_ID;
    const APP_KEY = api.APP_KEY;

    const req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

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
