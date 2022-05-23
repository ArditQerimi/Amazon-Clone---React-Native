import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const ListofProducts = ({ route }) => {
  const navigation = useNavigation();
  const data = route.params.data;

  return (
    <ScrollView>
      <ScrollView style={{ paddingTop: StatusBar.currentHeight }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{data.title}</Text>
        </View>
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#dcdcdc",
              backgroundColor: "white",
            }}
          >
            <Text>{data.items.length} Results in Internatio..</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text color="#2f7a87">Filter</Text>
              <AntDesign
                name="doubleright"
                size={10}
                color={"#2f7a87"}
                style={{ paddingHorizontal: 3 }}
              />
              <AntDesign name="down" size={10} color={"#878787"} />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "red" }}></View>
        {data.items.map((data, index) => (
          <Pressable
            style={{
              flexDirection: "row",
              padding: 10,
              alignItems: "center",
              backgroundColor: "white",
              marginTop: 5,
              paddingTop: 10,
            }}
            onPress={() =>
              navigation.navigate("DetailScreen", {
                id: data.id,

                name: data.name,
                rating: data.rating,
                store: data.store,
                category: data.category,
                price: data.price,
                cents: data.cents,
                carousel: data.carousel,
                thumbnail: data.thumbnail,
              })
            }
            key={index}
          >
            <View
              style={{
                width: 120,
                height: 150,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={data.imageUrl}
                style={{ width: 130, height: 130 }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                marginRight: 20,
                marginLeft: 20,
                backgroundColor: "white",
              }}
            >
              <View
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{ width: 230 }}
              >
                <Text style={{ color: "black", fontSize: 13 }}>
                  {data.name}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {[...Array(Math.floor(data.rating))].map((x, i) => {
                  console.log(Math.floor(data.rating));
                  console.log(data.rating - Math.floor(data.rating));
                  console.log(5 - Math.round(data.rating));
                  return (
                    <FontAwesome
                      key={`${data.id}-${i}`}
                      style={{ margin: 2 }}
                      name="star"
                      size={18}
                      color={"#e47911"}
                    />
                  );
                })}
                {data.rating - Math.floor(data.rating) >= 0.5 ? (
                  <FontAwesome
                    style={{ margin: 2 }}
                    name="star-half-o"
                    size={18}
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
                      size={18}
                      color={"#e47911"}
                    />
                  );
                })}
                <View style={{ marginLeft: 10 }}>
                  <Text>{data.rating}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Text style={{ fontSize: 16, lineHeight: 16, color: "black" }}>
                  $
                </Text>
                <Text style={{ fontSize: 20, lineHeight: 20 }}>
                  {data.price}
                </Text>
                <Text style={{ fontSize: 16, lineHeight: 16, color: "black" }}>
                  {data.cents}
                </Text>
              </View>
              <Text style={{ paddingTop: 10 }}>{data.store}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <View style={{ paddingTop: 60, backgroundColor: "white" }}></View>
    </ScrollView>
  );
};

export default ListofProducts;

const styles = StyleSheet.create({});
