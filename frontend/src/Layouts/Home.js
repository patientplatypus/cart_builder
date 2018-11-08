import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../Components/ProductCard";
import products from "../products.json";
import CartModal from "../Components/CartModal.js";


class Home extends Component {
  state = {};
  render() {
    return (
      <Container>
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            productName={product.productName}
            model={product.model}
            listItem1={product.listItems.listItem1}
            listItem2={product.listItems.listItem2}
            listItem3={product.listItems.listItem3}
          />
        ))}
        <CartModal />
      </Container>
    );
  }
}

export default Home;
