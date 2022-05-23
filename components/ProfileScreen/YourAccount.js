import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-elements";

const youracc = [
  {
    id: 1,
    title: "Manage gift card balance",
  },
  {
    id: 2,
    title: "Your Payments",
  },
  {
    id: 3,
    title: "Your Subscribe & Save",
  },
  {
    id: 4,
    title: "Your Orders",
  },
];

const YourAccount = () => {
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
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Your Account</Text>
        </View>
        <View>
          <Text style={{ color: "#1f6370", fontSize: 16 }}>See all</Text>
        </View>
      </View>

      <View>
        <FlatList
          data={youracc}
          horizontal
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, index }) => (
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                borderColor: "#e0e8ea",
                borderWidth: 1,
                borderRadius: 10,

                paddingVertical: 17,
                marginVertical: 10,
                marginHorizontal: 3,
              }}
            >
              <Text style={{ fontSize: 16, paddingHorizontal: 10 }}>
                {item.title}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default YourAccount;

const styles = StyleSheet.create({});
