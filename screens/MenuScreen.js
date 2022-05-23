import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React from "react";
import Header from "../components/HomeScreen/Header";
import Menu from "../components/MenuScreen/Menu";

const MenuScreen = () => {
  return (
    <View
      style={{
        // backgroundColor: "#dcdcdc",
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header />
      <Menu />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
