import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Layouts/Landing"
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
import Home from "./Layouts/Home";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/Landing" component={Landing} />
          </Switch>
        </BrowserRouter>
        {/* <Footer /> */}
      </div>
    );
  }
}
