import { StyleSheet, View, StatusBar, ScrollView } from "react-native";
import React, { useState, useContext } from "react";
import Header from "../components/HomeScreen/Header";
import Carousel from "../components/ProductDetail/Carousel";
import ScreenHeader from "../components/ProductDetail/ScreenHeader";
import Price from "../components/ProductDetail/Price";
import AddToCart from "../components/ProductDetail/AddToCart";
import { useRoute } from "@react-navigation/native";
import { CartContext } from "../App";
const DetailScreen = () => {
  const [selectedValue, setSelectedValue] = useState(1);
  const { onAddToCart } = useContext(CartContext);
  const route = useRoute();
  const data = route.params;

  return (
    <ScrollView
      style={{ paddingTop: StatusBar.currentHeight, backgroundColor: "white" }}
    >
      <Header />
      <ScreenHeader data={data} />
      <Carousel data={data} />
      <Price data={data} />
      <AddToCart
        data={data}
        onAddToCart={onAddToCart}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />

      <View style={{ height: 30 }}></View>
    </ScrollView>
  );
};

export default DetailScreen;
