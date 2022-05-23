import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Orders = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", paddingHorizontal: 10 }}>
      <View style={{ padding: 5, marginBottom: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Your Orders</Text>
      </View>
      <View>
        <Text style={{ color: "#545454" }}>Hi, you have no recent orders.</Text>
      </View>

      <Pressable
        style={{
          borderColor: "#e0e8ea",
          borderWidth: 1,
          alignItems: "center",
          borderRadius: 10,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate("DetailScreen")}
      >
        <Text
          style={{
            paddingVertical: 16,
            paddingHorizontal: 28,
            fontSize: 18,
          }}
        >
          Return to the Homepage
        </Text>
      </Pressable>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
