import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// http request will go to Peters stuff, and give back
const YoutubeSearchBar = props => {
  const formGroupStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem"
  };
  const inputStyle = {
    width: "50%"
  };
  const buttonStyle = {
    backgroundColor: "#fa6400"
  };
  return (
    <Form>
      <FormGroup style={formGroupStyle}>
        <Input
          style={inputStyle}
          type="text"
          name="youtubeSearchBar"
          id="youtubeSearchBar"
          placeholder="What would you like to build today?"
        />
        <Button style={buttonStyle}>
          <i className="fa fa-search" />
        </Button>
      </FormGroup>
    </Form>
  );
};

export default YoutubeSearchBar;