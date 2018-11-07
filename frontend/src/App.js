import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// Page components
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
