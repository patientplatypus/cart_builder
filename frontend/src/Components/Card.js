import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";

import "../Styles/Index.css";

const ProductCard = props => {
  return (
    <div>
      <Card>
        <Row>
          <Col>
            <CardImg top width="100%" src={props.image} alt={props.image} />
          </Col>
          <Col>
            <CardBody>
              <CardTitle>{props.title}</CardTitle>
              <CardSubtitle>{props.subTitle}</CardSubtitle>
              <CardText>
                <ul>
                  <li>{props.listItem1}</li>
                </ul>
                <ul>
                  <li>{props.listItem2}</li>
                </ul>
                <ul>
                  <li>{props.listItem3}</li>
                </ul>
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProductCard;
