import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import MenuScreen from "./screens/MenuScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import SigninPassword from "./screens/SigninPassword";
import { onAuthStateChanged, getAuth } from "./firebase";
import { createContext } from "react";
import ListofProducts from "./components/HomeScreen/ListofProducts";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { LogBox } from "react-native";

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="ListofProducts" component={ListofProducts} />
      <HomeStack.Screen name="DetailScreen" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function SignedOutStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="SigninPassword" component={SigninPassword} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function SignedInStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#2a7377",
          tabBarInActiveTintColor: "#2c2c2c",
          tabBarShowLabel: false,
          shifting: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeTabScreen"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "HomeTabScreen",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: "ProfileScreen",
            tabBarIcon: ({ color: color = "black", size }) => (
              <FontAwesome name="user" color={color} size={27} />
            ),
          }}
        />
        <Tab.Screen
          name="ShoppingCartScreen"
          component={ShoppingCartScreen}
          options={{
            tabBarLabel: "ShoppingCartScreen",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={27} />
            ),
          }}
        />
        <Tab.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{
            tabBarLabel: "MenuScreen",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="menu" color={color} size={32} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);

  useEffect(() => onAuthStateChanged(auth, (user) => userHandler(user)), []);
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export const CartContext = createContext({});

export default function App() {
  const [Cart, setCart] = useState([]);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const onAddToCart = (product, selectedValue) => {
    const isInCart = Cart.find((item) => item.id === product.id);
    if (isInCart) {
      setCart(
        Cart.map((item) =>
          item.id === product.id
            ? {
                ...isInCart,
                quantity: isInCart.quantity + +selectedValue,
              }
            : item
        )
      );
    } else {
      setCart([...Cart, { ...product, quantity: +selectedValue }]);
    }
  };

  const removeFromCart = (product) => {
    let isInCart = Cart.find((item) => item.id === product.id);

    if (isInCart.quantity === 1) {
      setCart(Cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        Cart.map((item) =>
          item.id === product.id
            ? { ...isInCart, quantity: isInCart.quantity - 1 }
            : item
        )
      );
    }
  };

  const deleteFromCart = (product) => {
    setCart(Cart.filter((item) => item.id !== product.id));
  };
  return (
    <>
      <CartContext.Provider
        value={{
          Cart,
          setCart,
          onAddToCart,
          removeFromCart,
          deleteFromCart,
        }}
      >
        <AuthNavigation />
      </CartContext.Provider>
    </>
  );
}
