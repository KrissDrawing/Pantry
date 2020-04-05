import React from "react";
import AppContext from "context";
import Input from "components/input/Input";
import Radio from "./FormRadio";
import { v4 as uuidv4 } from "uuid";

const categories = {
  uncattegorized: "uncattegorized",
  beverage: "beverage",
  alcohol: "alcohol",
};

class ProductForm extends React.Component {
  state = {
    name: "",
    amount: "",
    limit: "",
    category: categories.uncattegorized,
    uid: "",
  };
  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  setUid = () => {
    this.setState({
      uid: uuidv4(),
    });
  };
  render() {
    const { category } = this.state;
    return (
      <AppContext.Consumer>
        {(context) => (
          <form
            autoComplete="off"
            onSubmit={(e) => context.addProduct(e, this.state)}
          >
            <ul>
              <li>beverage</li>
              <li>balcohol</li>
            </ul>

            <Radio
              id={categories.beverage}
              checked={category === categories.beverage}
              changeFn={() => this.handleRadioButtonChange(categories.beverage)}
            >
              Article
            </Radio>

            <Input
              onChange={this.handleInputChange}
              value={this.state.name}
              name="name"
              label="Product name"
              type="text"
            ></Input>
            <Input
              onChange={this.handleInputChange}
              value={this.state.amount}
              name="amount"
              label="Amount"
              type="number"
              min={0}
              step={100}
            ></Input>
            <Input
              onChange={this.handleInputChange}
              value={this.state.limit}
              name="limit"
              label="Limit"
              type="number"
              min={0}
              step={100}
            ></Input>
            {/* <Input
              onChange={this.handleInputChange}
              value={this.state.title}
              label="Product name"
            ></Input> */}

            <button onClick={this.setUid} type="submit">
              Add Item
            </button>
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ProductForm;
