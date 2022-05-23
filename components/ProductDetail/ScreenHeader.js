import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ProductDetailHeader = ({ data }) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <>
      <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: "#1b6074" }}>{data.store}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginLeft: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {[...Array(Math.floor(data.rating))].map((x, i) => {
                  console.log(data.rating - Math.floor(data.rating));
                  console.log(5 - Math.round(data.rating));
                  return (
                    <FontAwesome
                      key={`${data.id}-${i}`}
                      style={{ margin: 2 }}
                      name="star"
                      size={15}
                      color={"#e47911"}
                    />
                  );
                })}
                {data.rating - Math.floor(data.rating) >= 0.5 ? (
                  <FontAwesome
                    style={{ margin: 2 }}
                    name="star-half-o"
                    size={15}
                    color={"#e47911"}
                  />
                ) : (
                  <></>
                )}
                {[...Array(5 - Math.round(data.rating))].map((x, i) => {
                  return (
                    <FontAwesome
                      key={`${data.id}-${i}`}
                      style={{ margin: 2 }}
                      name="star-o"
                      size={15}
                      color={"#e47911"}
                    />
                  );
                })}
                <View style={{ marginLeft: 10 }}>
                  <Text>{data.rating}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{ width: windowWidth, paddingRight: 10 }}
        >
          <Text style={{ color: "#686868", fontSize: 13 }}>{data.name}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image
              source={require("../../assets/amazonchoice.png")}
              resizeMode="contain"
              style={{ width: 130, height: 50 }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 12.5 }}> {data.category}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProductDetailHeader;

const styles = StyleSheet.create({});
