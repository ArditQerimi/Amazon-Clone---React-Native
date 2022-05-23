import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import { Divider } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../App";

const ItemsInCart = () => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const { Cart, onAddToCart, removeFromCart, deleteFromCart } =
    useContext(CartContext);

  const quantity = Cart.map((data, index) => data.quantity);

  return (
    <>
      <View>
        {Cart.length !== 0 ? (
          <View>
            <View style={{ backgroundColor: "#fff", paddingHorizontal: 15 }}>
              <View
                style={{
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontSize: 25, color: "#0f0f0f" }}>
                    Subtotal{" "}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", paddingVertical: 5 }}>
                  <Text style={{ fontSize: 30, lineHeight: 30 }}>$ </Text>

                  <Text style={{ fontSize: 30, lineHeight: 35 }}>
                    {Cart.reduce(
                      (acc, cur) =>
                        acc +
                        cur.quantity.toFixed(2) *
                          (+cur.price + +cur.cents / 100).toFixed(2),
                      0
                    )}
                  </Text>
                  <Text style={{ fontSize: 18, lineHeight: 25 }}></Text>
                </View>
              </View>

              <Pressable
                style={{
                  borderColor: "#e6d34d",
                  borderWidth: 1,
                  alignItems: "center",
                  borderRadius: 10,
                  marginHorizontal: 20,
                  marginVertical: 10,
                  backgroundColor: "#fed813",
                }}
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <Text
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 30,
                    fontSize: 16,

                    overflow: "hidden",
                    color: "#200d00",
                  }}
                >
                  Proceed to checkout ({" "}
                  {Cart.reduce((acc, cur) => acc + +cur.quantity, 0)} items)
                </Text>
              </Pressable>
              <View style={styles.section}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                />
                <Text style={styles.paragraph}>
                  {" "}
                  Send as a gift. Easy returns.
                </Text>
              </View>
            </View>
            {Cart.map((data, index) => (
              <View style={{ marginTop: 5 }} key={index}>
                <View style={{ backgroundColor: "#fff" }}>
                  <>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 5,
                        paddingHorizontal: 5,
                      }}
                    >
                      <View style={{ marginTop: 5 }}>
                        <Image
                          source={data.thumbnail}
                          style={{
                            width: 130,
                            height: 130,
                            resizeMode: "contain",
                          }}
                        />
                      </View>
                      <View style={{ width: 280, paddingHorizontal: 10 }}>
                        <Text
                          numberOfLines={2}
                          ellipsizeMode="tail"
                          style={{
                            width: "90%",
                            fontSize: 16,
                            color: "#333333",
                          }}
                        >
                          {data.name}
                        </Text>
                        <View
                          style={{ flexDirection: "row", paddingVertical: 5 }}
                        >
                          <Text
                            style={{
                              fontSize: 18,
                              lineHeight: 18,
                              color: "#121413",
                            }}
                          >
                            $
                          </Text>
                          <Text style={{ fontSize: 30, lineHeight: 30 }}>
                            {data.price}
                          </Text>
                          <Text
                            style={{
                              fontSize: 18,
                              lineHeight: 18,
                              color: "#121413",
                            }}
                          >
                            {data.cents}
                          </Text>
                        </View>
                        <View style={{ marginBottom: 2 }}>
                          <Text style={{ color: "#1b5c1a" }}>In Stock</Text>
                        </View>

                        <View>
                          <Text>
                            Color: <Text>Black</Text>
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{ flexDirection: "row", paddingHorizontal: 13 }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          borderColor: "#eaebef",
                          borderRadius: 10,
                          borderWidth: 1,
                          alignItems: "center",
                          backgroundColor: "#eaebef",
                        }}
                      >
                        <Pressable
                          style={{
                            borderRadius: 3,
                            padding: 6,
                          }}
                          onPress={() => removeFromCart(data, data.quantity)}
                        >
                          <MaterialCommunityIcons
                            name="delete-outline"
                            color={"black"}
                            size={20}
                          />
                        </Pressable>

                        <Text
                          style={{
                            alignItems: "center",
                            paddingHorizontal: 20,
                            backgroundColor: "#fff",
                            paddingVertical: 6,
                            color: "#1b98a6",
                            fontSize: 16,
                          }}
                        >
                          {data.quantity}
                        </Text>

                        <Pressable
                          onPress={() => onAddToCart(data, 1)}
                          style={{
                            borderRadius: 3,
                            padding: 6,
                          }}
                        >
                          <Entypo name="plus" color={"black"} size={20} />
                        </Pressable>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: 10,
                          alignItems: "center",
                        }}
                      >
                        <Pressable
                          style={{
                            borderColor: "#eaebef",
                            borderRadius: 10,
                            borderWidth: 1,
                            marginLeft: 10,
                          }}
                          onPress={() => deleteFromCart(data)}
                        >
                          <Text
                            style={{
                              alignItems: "center",
                              paddingHorizontal: 15,
                              color: "black",
                              paddingVertical: 8,
                              fontSize: 14,
                            }}
                          >
                            Delete
                          </Text>
                        </Pressable>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: "#eaebef",
                            borderRadius: 10,
                            marginLeft: 10,
                          }}
                        >
                          <Text
                            style={{
                              alignItems: "center",
                              paddingHorizontal: 15,
                              paddingVertical: 8,
                              fontSize: 14,
                              color: "black",
                            }}
                          >
                            Save for later
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: "#eaebef",
                        borderRadius: 10,
                        marginLeft: 10,
                        width: 250,
                        alignItems: "center",
                        marginVertical: 10,
                      }}
                    >
                      <Text
                        style={{
                          alignItems: "center",
                          paddingHorizontal: 15,
                          paddingVertical: 8,
                          fontSize: 14,
                          color: "black",
                        }}
                      >
                        Compare with similar items
                      </Text>
                    </View>
                    <Divider
                      orientation="horizontal"
                      width={5}
                      color="#eaedec"
                    />
                  </>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={{ backgroundColor: "#fff" }}>
            <View style={{}}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 15,
                  paddingHorizontal: 15,
                  borderBottomWidth: 1,
                  borderColor: "#eef0f0",
                  paddingBottom: 30,
                  paddingTop: 20,
                }}
              >
                <View style={{ marginTop: 5 }}>
                  <Image
                    source={require("../../assets/cart.webp")}
                    style={{
                      width: 110,
                      height: 110,
                      borderRadius: 55,

                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View style={{ width: 280, paddingHorizontal: 10 }}>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                      fontSize: 17,
                      color: "#333333",
                      fontWeight: "bold",
                    }}
                  >
                    Your Amazon Cart is empty
                  </Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{ width: "90%", fontSize: 16, color: "#838383" }}
                  >
                    Nothing in here. Only possibilites
                  </Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                      fontSize: 17,
                      color: "#1b98a6",
                      marginTop: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Pick up where you left off
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                height: 520,
                borderTopWidth: 1,
                borderColor: "#eef0f0",
                paddingTop: 20,
              }}
            >
              <Pressable
                style={{
                  borderColor: "#e6d34d",
                  borderWidth: 1,
                  alignItems: "center",
                  borderRadius: 10,
                  marginHorizontal: 20,
                  marginVertical: 10,
                  backgroundColor: "#fed813",
                }}
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <Text
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 30,
                    fontSize: 16,
                    fontWeight: "800",
                    overflow: "hidden",
                    color: "#200d00",
                  }}
                >
                  Continue shopping
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default ItemsInCart;

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
    color: "#141414",
  },
  checkbox: {
    margin: 8,
    borderRadius: 5,
    borderColor: "#a3a3a3",
  },
});
