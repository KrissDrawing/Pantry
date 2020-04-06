import React from "react";
import AppContext from "context";
import Input from "components/input/Input";
import Button from "components/button/Button";
import Radio from "./FormRadio";
import firebase from "firebase";
import styles from "./ProductForm.module.scss";
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

  editedProductState = (items) => {
    if (!this.props.add) {
      const item = items.find((x) => x.id == this.props.match.params["id"]);
      console.log(item);
      this.setState({
        name: item.name,
        amount: item.amount,
        limit: item.limit,
        category: categories.uncattegorized,
        uid: item.uid,
      });
    }
  };

  submitFirebase = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("products")
      .add(this.state)
      .then(
        this.setState({
          name: "",
          amount: "",
          limit: "",
          category: categories.uncattegorized,
        })
      );
  };

  editFirebase = (e, id) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("products")
      .doc(id)
      .set(this.state)
      .then(
        this.setState({
          name: "",
          amount: "",
          limit: "",
          category: categories.uncattegorized,
        })
      );
  };

  resetForm = () => {
    this.setState({
      name: "",
      amount: "",
      limit: "",
      category: categories.uncattegorized,
    });
  };
  setUid = () => {
    this.setState({
      uid: uuidv4(),
    });
  };
  componentDidMount() {
    if (!this.props.add) {
      let value = this.context;
      this.editedProductState(value.products);
    }
  }
  render() {
    const { category } = this.state;
    const { add } = this.props;

    return (
      <AppContext.Consumer>
        {(context) => (
          <form
            className={styles.wrapper}
            autoComplete="off"
            onSubmit={(e) => {
              // (context.addProduct(e, this.state);
              add
                ? this.submitFirebase(e)
                : this.editFirebase(e, this.props.match.params["id"]);
            }}
          >
            {/* <Radio
              id={categories.beverage}
              checked={category === categories.beverage}
              changeFn={() => this.handleRadioButtonChange(categories.beverage)}
            >
              Article
            </Radio> */}
            <Input
              onChange={this.handleInputChange}
              value={this.state.name}
              name="name"
              label="Product name"
              type="text"
            ></Input>
            <div className={styles.amountLimit}>
              <Input
                onChange={this.handleInputChange}
                value={this.state.amount}
                name="amount"
                label="Amount"
                type="number"
                min={0}
                step={1}
              ></Input>
              <Input
                onChange={this.handleInputChange}
                value={this.state.limit}
                name="limit"
                label="Limit"
                type="number"
                min={0}
                step={1}
              ></Input>
            </div>
            {/* <Input
              onChange={this.handleInputChange}
              value={this.state.title}
              label="Product name"
            ></Input> */}
            <Button onClick={this.setUid} type="submit">
              {add ? "Add Item" : "Edit Item"}
            </Button>
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}
ProductForm.contextType = AppContext;

export default ProductForm;
