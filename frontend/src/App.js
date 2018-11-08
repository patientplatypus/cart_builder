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
  state = {
    search: ''
  };
  handleInputChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert("click alert");
  }
  render() {
    return (
      <div>
        <Header />
        <YoutubeSearchBar
          change={event => this.handleInputChange(event)}
          submit={() => this.handleFormSubmit}
        />
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
