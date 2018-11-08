import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// http request will go to Peters stuff, and give back
class YoutubeSearchBar extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Input
            type="text"
            name="youtubeSearchBar"
            id="youtubeSearchBar"
            placeholder="placeholder"
          />
          <Button>Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default YoutubeSearchBar;
