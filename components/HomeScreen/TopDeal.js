import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Timer from "./Timer";
import { SHOP_DATA } from "../../data/data";
import { useNavigation } from "@react-navigation/native";

// const item = SHOP_DATA[0].items[5];
// console.log(item);

const TopDeal = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#fff", marginTop: 5 }}>
      <Text style={{ fontSize: 20, padding: 10 }}>Top Deal</Text>
      <View>
        <View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../data/images/Electronics/l1.jpg")}
              style={{ width: 270, height: 270 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 5,
              }}
            >
              <Text style={{ fontSize: 18, lineHeight: 18, color: "#686868" }}>
                $
              </Text>
              <Text style={{ fontSize: 30, lineHeight: 30 }}>
                {SHOP_DATA[0].items[5].price}
              </Text>
              <Text style={{ fontSize: 18, lineHeight: 18, color: "#686868" }}>
                {SHOP_DATA[0].items[5].cents}
              </Text>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 20,
                    lineHeight: 30,
                    color: "#adadad",
                    textDecorationLine: "line-through",
                    marginHorizontal: 10,
                  }}
                >
                  $399.99
                </Text>
              </View>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              {SHOP_DATA[0].items[5].name}
            </Text>
            <Text> </Text>
            <Timer />
            <Pressable
              onPress={() =>
                navigation.navigate("DetailScreen", {
                  id: SHOP_DATA[0].items[5].id,
                  name: SHOP_DATA[0].items[5].name,
                  rating: SHOP_DATA[0].items[5].rating,
                  store: SHOP_DATA[0].items[5].store,
                  category: SHOP_DATA[0].items[5].category,
                  price: SHOP_DATA[0].items[5].price,
                  cents: SHOP_DATA[0].items[5].cents,
                  carousel: SHOP_DATA[0].items[5].carousel,
                  thumbnail: SHOP_DATA[0].items[5].thumbnail,
                })
              }
            >
              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: "#3885C1" }}>See details</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopDeal;

const styles = StyleSheet.create({});
