import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../Components/ProductCard";
import products from "../products.json";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container>
        <h1>Home Component</h1>
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            productName={product.productName}
            model={product.model}
            listItem1={product.listItem1}
            listItem2={product.listItem2}
            listItem3={product.listItem3}
          />
        ))}
      </Container>
    );
  }
}

export default Home;
