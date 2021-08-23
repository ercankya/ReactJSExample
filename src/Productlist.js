import React, { Component } from "react";
import { Button, Progress, Table } from "reactstrap";

export default class Productlist extends Component {
  render() {
    return (
      <div>
        <div className="text-center">{this.props.products.length}</div>
        <Progress max="77" color="success" value={this.props.products.length} />
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit Name</th>
              <th>Category Id</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.productID}>
                <th scope="row">{product.productID}</th>
                <td>{product.name}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.categoryID}</td>
                <td>
                  <Button
                    color="info"
                    onClick={() => this.props.addtoCart(product)}
                  >
                    Add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
