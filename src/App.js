import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Categorylist from "./Categorylist";
import Navi from "./Navi";
import Productlist from "./Productlist";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [], productLength: "" };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.name });
    console.log(category);
    this.getProducts(category.id);
  };

  addtoCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(
      (c) => c.product.productID === product.productID
    );
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.name + "  added to cart", 1);
  };

  DeltoCart = (product) => {
    let newCart = this.state.cart.filter(
      (c) => c.product.productID !== product.productID
    );
    this.setState({ cart: newCart });
    alertify.error(product.name + "  delete from cart", 1);
  };

  getProducts = (categoryID) => {
    let url = "http://localhost:3000/products";
    if (categoryID) {
      url += "?categoryID=" + categoryID;
      this.setState({ productLength: +1 });
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let tmp = { title: "Category List" };
    let tmp2 = { title: "Product List" };
    return (
      <div>
        <Container>
          <Navi DeltoCart={this.DeltoCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <Categorylist
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={tmp}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Productlist
                      {...props}
                      addtoCart={this.addtoCart}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={tmp2}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      DeltoCart={this.DeltoCart}
                    />
                  )}
                ></Route>
                <Route path="/form1" component={FormDemo1}></Route>
                <Route path="/form2" component={FormDemo2}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
