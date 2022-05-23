import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-elements";

const Categories = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#fff", marginTop: 5 }}>
      {data.map((data, index) => (
        <View key={index}>
          <Text style={{ fontSize: 20, padding: 10 }}>{data.title}</Text>

          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <FlatList
              data={data.items}
              keyExtractor={(item, index) => item.id}
              numColumns={data.items.length <= 4 ? 2 : 3}
              renderItem={({ item, index }) => (
                <View>
                  <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    style={{ marginBottom: 30 }}
                    onPress={() =>
                      navigation.navigate("DetailScreen", {
                        id: item.id,
                        name: item.name,
                        rating: item.rating,
                        store: item.store,
                        category: item.category,
                        price: item.price,
                        cents: item.cents,
                        carousel: item.carousel,
                        thumbnail: item.thumbnail,
                      })
                    }
                  >
                    <Image
                      source={item.imageUrl}
                      style={{
                        width: data.items.length <= 4 ? 170 : 120,
                        height: data.items.length <= 4 ? 170 : 120,
                        margin: 2,
                      }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <Pressable
            style={{ marginHorizontal: 10, marginBottom: 10 }}
            onPress={() =>
              navigation.navigate("ListofProducts", {
                data: data,
              })
            }
          >
            <Text style={{ color: "#3885C1" }}>See more</Text>
          </Pressable>
          <Divider orientation="horizontal" width={5} color="#dcdcdc" />
        </View>
      ))}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
