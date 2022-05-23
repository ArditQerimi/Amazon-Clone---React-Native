import { StyleSheet, StatusBar, ScrollView } from "react-native";
import React from "react";
import ItemsInCart from "../components/ShoppingCartScreen/ItemsInCart";
import Header from "../components/HomeScreen/Header";

const ShoppingCartScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#dcdcdc",
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header />
      <ItemsInCart />
    </ScrollView>
  );
};

export default ShoppingCartScreen;
