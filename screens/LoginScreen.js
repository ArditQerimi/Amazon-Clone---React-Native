import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth, signInAnonymously, onAuthStateChanged } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const auth = getAuth();
  console.log(auth);
  const [loggedUser, setLoggedUser] = useState([]);

  const signInAnonym = async () => {
    await signInAnonymously(auth, loggedUser);
  };

  onAuthStateChanged(auth, (currentUser) => {
    setLoggedUser(currentUser);
  });

  useEffect(() => {
    return () => {
      setLoggedUser([]);
    };
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View style={{ alignItems: "center", paddingTop: 28 }}>
        <Image
          source={require("../assets/amazonlogo.png")}
          style={{ width: 200, height: 100 }}
          resizeMode="contain"
        />
        <View>
          <Text
            style={{
              color: "#31383d",
              fontWeight: "bold",
              fontSize: 20,
              paddingTop: 10,
            }}
          >
            Sign in to your account
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 30, marginTop: 10 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 16 }}>View your wish list</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>Find & reorder past purchases</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>Track your purchases</Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Pressable
          style={{
            backgroundColor: "#f3d27e",
            borderColor: "#aa9754",
            borderWidth: 1,

            borderRadius: 5,
            paddingVertical: 10,
            alignItems: "center",
            marginHorizontal: 20,
            marginBottom: 5,
          }}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={{ color: "#463000" }}>Already a customer? Sign in</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#f3f4f8",
            borderColor: "#c1c2c5",
            borderWidth: 1,
            borderRadius: 5,
            paddingVertical: 10,
            alignItems: "center",
            marginHorizontal: 20,
            marginBottom: 5,
          }}
          onPress={() => navigation.push("Signup")}
        >
          <Text style={{ color: "#2e2f31" }}>
            New to Amazon.com? Create an account
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#f3f4f8",
            borderColor: "#c1c2c5",
            borderWidth: 1,
            borderRadius: 5,
            paddingVertical: 10,
            alignItems: "center",
            marginHorizontal: 20,
            marginBottom: 5,
          }}
          onPress={signInAnonym}
        >
          <Text style={{ color: "#2e2f31" }}>Skip sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
