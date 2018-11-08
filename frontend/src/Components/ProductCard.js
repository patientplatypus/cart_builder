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
  Col,
  ListGroup,
  ListGroupItem
} from "reactstrap";

import "../Styles/Index.css";

const ProductCard = props => {
  return (
    <div>
      <Card>
        <Row>
          <Col>
            <CardImg
              top
              height="200px"
              width="100%"
              src={props.image}
              alt={props.image}
            />
          </Col>
          <Col>
            <CardBody>
              <CardTitle>{props.productName}</CardTitle>
              <CardSubtitle>Model# {props.model}</CardSubtitle>
              <ListGroup>
                <ListGroupItem>{props.listItem1}</ListGroupItem>
                <ListGroupItem>{props.listItem2}</ListGroupItem>
                <ListGroupItem>{props.listItem3}</ListGroupItem>
              </ListGroup>
              <Button>Button</Button>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProductCard;
