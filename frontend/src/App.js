import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';
import renderIf from 'render-if';
// Page components
import Header from "./Components/Header";
import YoutubeSearchBar from "./Components/SearchBar";
import Footer from "./Components/Footer";
import Landing from "./Layouts/Landing";
import Home from "./Layouts/Home";
import "./App.css";

export default class App extends Component {
  state = {
    search: '',
    result: []
  };
  handleInputChange = (event) => {
    console.log("inside handle input change");
    console.log(event.target.value);
    // const { name, value } = event.target;

    this.setState({
      search: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // alert("click alert");
    console.log("value", event);
    console.log("state", this.state.search);
    const payload = {
      payload: {
        searchString: this.state.search
      }
    }
    axios.post("http://104.236.214.151:5000/searchYoutube", { payload })
      .then(response => {
        console.log(response);
        console.log(response.data.array);
        this.setState({
          result: response.data.array
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Header />
        <YoutubeSearchBar
          change={event => this.handleInputChange(event)}
          submit={(event) => this.handleFormSubmit(event)}
        />
        {renderIf(this.state.result.length > 0)(
          <div>
            {this.state.result}
          </div>
        )}
        {
          this.state.result && 
        }
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
