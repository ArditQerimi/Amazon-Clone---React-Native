import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { getAuth, signOut } from "../../firebase";

const Greet = () => {
  const auth = getAuth();
  const signOutUser = async () => {
    await signOut(auth);
  };
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#b4e8e6",
        padding: 16,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontFamily: "sans-serif" }}>
          Hello, <Text style={{ fontWeight: "700" }}> Ardit</Text>
        </Text>
      </View>
      <Pressable
        style={{
          height: 50,
          width: 50,
          borderRadius: 25,
          borderWidth: 2,
          overflow: "hidden",
          borderColor: "#fff",
          alignItems: "center",
        }}
        onPress={signOutUser}
      >
        <Image
          source={require("../../assets/profile.png")}
          style={{ width: 50, height: 50, borderRadius: 25 }}
          resizeMode="cover"
        />
      </Pressable>
    </View>
  );
};

export default Greet;

const styles = StyleSheet.create({});
