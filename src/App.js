import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./home/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./about/about";
import Contact from "./contact/contact";

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
      </div>
    </Switch>
  );
}

export default App;
