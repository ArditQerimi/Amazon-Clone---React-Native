import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BuyAgain = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{ backgroundColor: "white", paddingHorizontal: 10, marginTop: 5 }}
    >
      <View style={{ padding: 5, marginBottom: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Buy Again</Text>
      </View>
      <View>
        <Text style={{ color: "#545454" }}>
          See what others are reordering on Buy Again
        </Text>
      </View>

      <Pressable
        style={{
          borderColor: "#e0e8ea",
          borderWidth: 1,
          alignItems: "center",
          borderRadius: 10,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text
          style={{
            paddingVertical: 16,
            paddingHorizontal: 28,
            fontSize: 18,
          }}
        >
          Visit Buy Again
        </Text>
      </Pressable>
    </View>
  );
};

export default BuyAgain;

const styles = StyleSheet.create({});
