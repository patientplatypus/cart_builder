import React, { Component } from "react";
import ProductCard from "../Components/Card";
import { Container, Row, Col } from "reactstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container>
        <h1>Home Component</h1>
        {/* Row */}
        <Row>
          <Col>
            <ProductCard
              image={
                "https://images.homedepot-static.com/productImages/eaea7598-bc51-46fe-86d4-efc1bce3e723/svn/husky-claw-hammers-n-g16chd-hn-64_400_compressed.jpg"
              }
              title={"16 oz. Fiberglass Claw Hammer"}
              listItem1={"Durable quality"}
              listItem2={"Long lasting"}
              listItem3={
                "Lifetime Warranty with no questions, no receipt required."
              }
            />
          </Col>
        </Row>
        {/* Row */}
        <Row>
          <Col>
            <ProductCard />
          </Col>
        </Row>
        {/* Row */}
        <Row>
          <Col>
            <ProductCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;