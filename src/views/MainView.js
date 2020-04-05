import React from "react";
import CardList from "components/card/CardList";

const MainView = ({ products }) => {
  return <CardList products={products} />;
};

export default MainView;
