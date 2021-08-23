import alertify from "alertifyjs";
import React, { Component } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default class FormDemo2 extends Component {
  state = {
    email: "",
    city: "",
    password: "",
    description: "",
  };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.error(this.state.email + this.state.city + "Added to db", 1);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="User">Username : </Label>
            <input
              type="User"
              name="User"
              id="User"
              onChange={this.onChangeHandler}
              placeholder=" Enter User"
            ></input>
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password : </Label>
            <input
              type="Password"
              name="Password"
              id="Password"
              onChange={this.onChangeHandler}
              placeholder=" Enter Password"
            ></input>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email : </Label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.onChangeHandler}
              placeholder=" Enter email"
            ></input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description : </Label>
            <input
              type="textarea"
              name="description"
              id="description"
              onChange={this.onChangeHandler}
              placeholder=" Enter Description"
            ></input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City : </Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.onChangeHandler}
            >
              {" "}
              <option> Ankara</option>
              <option>Istanbul </option>
              <option>Diyarbakır </option>
              <option> Eskişehir</option>
              <option>Adana </option>
              <option>Sakarya </option>
            </Input>
          </FormGroup>

          <input type="submit" value="save"></input>
        </Form>
      </div>
    );
  }
}
