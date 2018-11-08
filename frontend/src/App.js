import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Page components
import Header from "./Components/Header";
import YoutubeSearchBar from "./Components/SearchBar";
import Footer from "./Components/Footer";
import Landing from "./Layouts/Landing";
import Home from "./Layouts/Home";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <YoutubeSearchBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Landing" component={Landing} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
