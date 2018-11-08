import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class YoutubeSearchBar extends Component {
  state = {
    searchString: ''
  }
  formGroupStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem"
  };
  inputStyle = {
    width: "50%"
  };
  buttonStyle = {
    backgroundColor: "#fa6400"
  };
  onClickHandler = (event) => {
    console.log('inside onClickHandler');
    this.props.submit(event);
  }
  render() {
    return (
      <Form>
        <FormGroup style={this.formGroupStyle}>
          <Input
            style={this.inputStyle}
            type="text"
            name="youtubeSearchBar"
            id="youtubeSearchBar"
            placeholder="What would you like to build today?"
            onChange={this.props.change}
          />
          <Button
            style={this.buttonStyle}
            // onSubmit={this.props.submit}
            onClick={(event) => { this.onClickHandler(event) }}
          >
            <i className="fa fa-search" />
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default YoutubeSearchBar;
