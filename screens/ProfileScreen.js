import {
  StyleSheet,
  View,
  StatusBar,
  VirtualizedList,
  ScrollView,
  FlatList,
  ScrollViewComponent,
} from "react-native";
import React from "react";

import Header from "../components/ProfileScreen/Header";
import Greet from "../components/ProfileScreen/Greet";
import Categories from "../components/ProfileScreen/Categories";
import Orders from "../components/ProfileScreen/Orders";
import KeepShoppingFor from "../components/ProfileScreen/KeepShoppingFor";
import YourLists from "../components/ProfileScreen/YourLists";
import YourAccount from "../components/ProfileScreen/YourAccount";
import GiftCardBalance from "../components/ProfileScreen/GiftCardBalance";
import BuyAgain from "../components/ProfileScreen/BuyAgain";

const ProfileScreen = () => {
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView>
        <Header />
        <Greet />
        <Categories />
        <Orders />
        <KeepShoppingFor />
        <YourLists />
        <YourAccount />
        <GiftCardBalance />
        <BuyAgain />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
