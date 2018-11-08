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
  const cardStyle = {
    borderRight: "solid 1px rgba(0,0,0,.125)"
  };
  const listItemStyle = {
    border: "none",
    display: "list-item"
  };
  return (
    <div>
      <Card>
        <Row>
          <Col>
            <CardImg
              top
              height="100%"
              width="100%"
              src={props.image}
              alt={props.image}
              style={cardStyle}
            />
          </Col>
          <Col>
            <CardBody>
              <CardTitle>{props.productName}</CardTitle>
              <hr />
              <CardSubtitle>Model# {props.model}</CardSubtitle>
              <br />
              <ListGroup>
                <ListGroupItem style={listItemStyle}>
                  {props.listItem1}
                </ListGroupItem>
                <ListGroupItem style={listItemStyle}>
                  {props.listItem2}
                </ListGroupItem>
                <ListGroupItem style={listItemStyle}>
                  {props.listItem3}
                </ListGroupItem>
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
