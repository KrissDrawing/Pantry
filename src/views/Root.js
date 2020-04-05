import React from "react";
import AppContext from "context";
import EditView from "views/EditView";
import AddItemView from "views/AddItemView";
import ShopCartView from "views/ShopCartView";
import Navigation from "components/header/Navigation";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainView from "./MainView";

class Root extends React.Component {
  state = {
    products: [
      {
        name: "asfas",
        amount: "300",
        limit: "500",
        category: "uncattegorized",
        uid: "12523523",
      },
      {
        name: "asfas",
        amount: "500",
        limit: "500",
        category: "uncattegorized",
        uid: "1252352sa3",
      },
      {
        name: "asfas",
        amount: "100",
        limit: "500",
        category: "uncattegorized",
        uid: "fsasavr21",
      },
      {
        name: "asfas",
        amount: "100",
        limit: "500",
        category: "uncattegorized",
        uid: "fsasaavr21",
      },
      {
        name: "asfas",
        amount: "100",
        limit: "500",
        category: "uncattegorized",
        uid: "fsasasvr21",
      },
      {
        name: "asfas",
        amount: "100",
        limit: "5",
        category: "uncattegorized",
        uid: "fsasafvr21",
      },
      {
        name: "asfas",
        amount: "100",
        limit: "50",
        category: "uncattegorized",
        uid: "fsaseavr21",
      },
    ],
  };

  addProduct = (e, newItem) => {
    e.preventDefault();
    newItem.uid = uuidv4();

    this.setState((prevState) => ({
      products: [...prevState.products, newItem],
    }));
  };

  deleteProduct = (uid) => {
    const list = [...this.state.products];
    const updatedList = list.filter((item) => item.uid !== uid);

    this.setState({ products: updatedList });
  };

  render() {
    const contextElements = {
      ...this.state,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct,
    };

    return (
      <>
        <AppContext.Provider value={contextElements}>
          <BrowserRouter>
            <Navigation />
            <Switch>
              <Route
                exact
                path="/"
                component={() => <MainView products={this.state.products} />}
              />
              <Route path="/add" component={AddItemView} />
              <Route
                path="/cart"
                component={() => (
                  <ShopCartView products={this.state.products} />
                )}
              />
              <Route path="/edit" component={EditView} />
            </Switch>
          </BrowserRouter>
        </AppContext.Provider>
      </>
    );
  }
}

export default Root;
