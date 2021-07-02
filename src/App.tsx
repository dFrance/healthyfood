import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './Pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <HomePage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
