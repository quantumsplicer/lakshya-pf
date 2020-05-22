import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./home/home";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./about/about";
import Contact from "./contact/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
