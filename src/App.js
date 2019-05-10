import React from 'react';
import logo from './logo.svg';
import './App.css';
import api from './assets/API.json';

const App = () => {

    const APP_ID = api.APP_ID;
    const APP_KEY = api.APP_KEY;

  return(
      <div className="App">
       <h1>Recipe App</h1>;
      </div>
  );
}

export default App;
