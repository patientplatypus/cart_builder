import  React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";


// http request will go to Peters stuff, and give back 
class YoutubeSearchBar extends Component {
    render(){
        return (
            <Form>
                <FormGroup>
                    <Label  for="youtubeSearchBar">Video Search</Label>
                    <Input type="textarea" name="youtubeSearchBar" id="youtubeSearchBar" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default YoutubeSearchBar;