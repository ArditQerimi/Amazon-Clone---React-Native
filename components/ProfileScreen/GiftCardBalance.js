import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-elements";

const giftcardbalance = [
  {
    id: 1,
    title: "Redeem Gift Card",
  },
  {
    id: 2,
    title: "Reload Balance",
  },
];

const GiftCardBalance = () => {
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
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Gift Card Balance: $0.00
          </Text>
        </View>
      </View>

      <View>
        <FlatList
          data={giftcardbalance}
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
      <View>
        <Text style={{ color: "#1f6370", fontSize: 16 }}>Manage</Text>
      </View>
    </View>
  );
};

export default GiftCardBalance;

const styles = StyleSheet.create({});
