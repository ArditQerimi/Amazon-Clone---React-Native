import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

const categories = [
  {
    id: 1,
    title: "Your Orders",
  },
  { id: 2, title: "Buy Again" },
  {
    id: 3,
    title: "Your Account",
  },
  {
    id: 4,
    title: "Your Lists",
  },
];

const Categories = () => {
  return (
    <View style={{ alignItems: "center", backgroundColor: "#fff" }}>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => item.id}
        // horizontal
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#fafafa",
                borderRadius: 25,
                height: 50,
                width: 170,
                alignItems: "center",
                justifyContent: "space-between",
                borderColor: "#e0e8ea",
                borderWidth: 1,
                margin: 6,
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  fontSize: 18,
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                }}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
