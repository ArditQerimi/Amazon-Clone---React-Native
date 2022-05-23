import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const trends = [
  {
    id: 1,
    title: "Apple iPhone 12, 128GB, Black - Unlocked (Renewed Premium)",
    price: "929",
    cents: "00",
    img: require("../../assets/trend1.jpg"),
  },
  {
    id: 2,
    title:
      "OtterBox Symmetry Case with MagSafe for iPhone 12 Pro Max - Non-Retail Packaging - Tea Petal Pink",
    price: "24",
    cents: "97",
    img: require("../../assets/trend2.jpg"),
  },
  {
    id: 3,
    title:
      "QHOHQ [3+3 Pack] Screen Protector for iPhone 13 Pro 6.1 Inch with Camera Lens Protector, HD Tempered Glass, 9H Hardness, Scratch Resistant - Case Friendly [Not fit iPhone 13 Pro Max 6.7",
    price: "9",
    cents: "99",
    img: require("../../assets/trend3.jpg"),
  },
];

const YourShoppingTrends = () => {
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={{ backgroundColor: "#fff", marginTop: 5 }}>
      <Text style={{ fontSize: 20, padding: 10 }}>
        Inspired by your shopping trends
      </Text>
      <View>
        {trends.map((item, index) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
            key={index}
          >
            <Pressable>
              <Image
                source={item.img}
                style={{ width: 100, height: 100, resizeMode: "contain" }}
              />
            </Pressable>
            <View style={{ width: windowWidth / 1.2, paddingHorizontal: 10 }}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{ width: "90%", fontSize: 16, color: "#686868" }}
              >
                {item.title}
              </Text>
              <View style={{ flexDirection: "row", paddingVertical: 5 }}>
                <Text
                  style={{ fontSize: 18, lineHeight: 18, color: "#686868" }}
                >
                  $
                </Text>
                <Text style={{ fontSize: 30, lineHeight: 30 }}>
                  {item.price}
                </Text>
                <Text
                  style={{ fontSize: 18, lineHeight: 18, color: "#686868" }}
                >
                  {item.cents}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default YourShoppingTrends;
