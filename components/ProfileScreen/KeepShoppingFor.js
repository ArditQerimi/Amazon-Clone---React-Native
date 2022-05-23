import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";

const keepshopping = [
  {
    id: 1,
    title: "Photographic film",
    image: require("../../assets/keep1.jpg"),
  },
  {
    id: 2,
    title: "Camera lenses",
    image: require("../../assets/keep2.jpg"),
  },
  {
    id: 3,
    title: "Hot-air hair brushes",
    image: require("../../assets/keep3.jpg"),
  },
  {
    id: 4,
    title: "Cell phones",
    image: require("../../assets/keep4.jpg"),
  },
];

const KeepShoppingFor = () => {
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
            Keep shopping for
          </Text>
        </View>
        <View>
          <Text style={{ color: "#1f6370", fontSize: 16 }}>Edit</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={keepshopping}
          keyExtractor={(item, index) => item.id}
          // horizontal
          numColumns={2}
          renderItem={({ item, index }) => (
            <TouchableOpacity>
              <View
                style={{
                  height: 90,
                  width: 160,
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderColor: "#e0e8ea",
                  borderWidth: 1,
                  margin: 6,
                }}
              >
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{ width: 150, height: 80 }}
                />
              </View>
              <View style={{ alignItems: "center", marginBottom: 5 }}>
                <Text
                  style={{
                    alignItems: "center",
                    fontSize: 14,
                  }}
                >
                  {item.title}
                </Text>
              </View>
              <View></View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Text style={{ color: "#1f6370", fontSize: 16 }}>
          View your browsing history
        </Text>
      </View>
    </View>
  );
};

export default KeepShoppingFor;

const styles = StyleSheet.create({});
