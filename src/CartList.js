import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Category ID</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.productID}>
              <td>{cartItem.product.productID}</td>
              <td>{cartItem.product.name}</td>
              <td>{cartItem.quantity}</td>
              <td>{cartItem.product.categoryID}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>
                  <Button color="danger" onClick={() => this.props.DeltoCart(cartItem.product)}>
                    Delete
                  </Button>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}
