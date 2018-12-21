import React, { Component } from "react";
import SearchBar from '../Components/SearchBar';
// import UrlButton from "../Components/UrlButton";
import {Col, Row, Container} from 'reactstrap';

class Landing extends Component {
    render(){
        return(

            <Container>
                <Row>
                    <Col>
                        <SearchBar/>

                        {/* <UrlButton/> */}

                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Landing;