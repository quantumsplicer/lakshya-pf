import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./home/home";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
