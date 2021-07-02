import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './Pages/Home'
import { Register } from './Pages/Register'
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <HomePage />
          <Footer />
        </Route>
        <Route exact path="/register">
          <Header />
          <Register />
          <Footer />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
