import { StyleSheet, ScrollView, View, StatusBar } from "react-native";
import React from "react";
import Header from "../components/HomeScreen/Header";
import Carousel from "../components/HomeScreen/Carousel";
import SomeProducts from "../components/HomeScreen/LastLookedProducts";
import YourShoppingTrends from "../components/HomeScreen/YourShoppingTrends";
import TopDeal from "../components/HomeScreen/TopDeal";
import Categories from "../components/HomeScreen/Categories";

import { SHOP_DATA } from "../data/data";

const HomeScreen = () => {
  return (
    <ScrollView
      scrollViewProps={{
        nestedScrollEnabled: true,
      }}
      style={{
        backgroundColor: "#dcdcdc",
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header />

      <Carousel />
      {/* <View style={{ position: "absolute", top: 250 }}> */}
      <SomeProducts />
      {/* </View> */}
      {/* <YourShoppingTrends /> */}
      <TopDeal />
      <Categories data={SHOP_DATA} />
      <View style={{ paddingVertical: 12 }}></View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
