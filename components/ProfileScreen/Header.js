import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = () => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#94dfdb",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Image
        source={require("../../assets/amazon-logo-black-transparent.png")}
        style={{ width: 110, height: 40 }}
        resizeMode="contain"
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Icon
            style={{ marginHorizontal: 50 }}
            name="bell"
            type="fontisto"
            size={25}
            color="#191919"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" type="feather" size={25} color="#191919" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
