import React from "react";
import AppContext from "context";
import EditView from "views/EditView";
import AddItemView from "views/AddItemView";
import ShopCartView from "views/ShopCartView";
import HeaderNavigation from "components/header/HeaderNavigation";
import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import MainView from "./MainView";
import firebase from "../firebase";
import ProductForm from "../components/Forms/ProductForm";

class Root extends React.Component {
  state = {
    products: [],
  };

  addProduct = (e, newItem) => {
    e.preventDefault();
    newItem.uid = uuidv4();

    this.setState((prevState) => ({
      products: [...prevState.products, newItem],
    }));
  };

  deletefb = (id) => {
    if (window.confirm(`Do you want to delete?`)) {
      firebase
        .firestore()
        .collection("products")
        .doc(id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    }
  };

  render() {
    const contextElements = {
      ...this.state,
      addProduct: this.addProduct,
      deletefb: this.deletefb,
    };

    return (
      <>
        <AppContext.Provider value={contextElements}>
          <BrowserRouter>
            <HeaderNavigation />
            <Switch>
              <Route
                exact
                path="/"
                component={() => <MainView products={this.state.products} />}
              />
              <Route
                exact
                path="/add"
                component={() => <AddItemView add={true} />}
              />
              <Route
                path="/cart"
                component={() => (
                  <ShopCartView products={this.state.products} />
                )}
              />
              <Route path="/:id/edit/" component={ProductForm} />
              />
            </Switch>
          </BrowserRouter>
        </AppContext.Provider>
      </>
    );
  }
  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        const newState = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.setState({
          products: newState,
        });
      });
  }
}

export default Root;
