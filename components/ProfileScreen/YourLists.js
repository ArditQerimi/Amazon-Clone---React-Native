import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const YourLists = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 5,
        paddingHorizontal: 14,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Your Lists</Text>
        </View>
        <View>
          <Text style={{ color: "#1f6370", fontSize: 16 }}>See all</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#e0e8ea",
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 20,
          paddingVertical: 30,
          marginVertical: 10,
        }}
      >
        <View>
          <Text style={{ color: "#363b39", fontSize: 18 }}>Shopping List</Text>
          <Text style={{ color: "#828888", fontSize: 14 }}>
            Private · Default
          </Text>
        </View>
        <View>
          <Image
            source={require("../../assets/listicon1.png")}
            style={{ width: 60, height: 60 }}
          />
        </View>
      </View>
    </View>
  );
};

export default YourLists;

const styles = StyleSheet.create({});
