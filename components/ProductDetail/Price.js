import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductDetailPrice = ({ data }) => {
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10, marginTop: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 22, lineHeight: 22, color: "#686868" }}>
          $
        </Text>
        <Text style={{ fontSize: 36, lineHeight: 36 }}>{data.price}</Text>
        <Text style={{ fontSize: 22, lineHeight: 22, color: "#686868" }}>
          {data.cents}
        </Text>
      </View>
    </View>
  );
};

export default ProductDetailPrice;

const styles = StyleSheet.create({});
