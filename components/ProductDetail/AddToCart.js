import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
const AddToCart = ({ data, onAddToCart, selectedValue, setSelectedValue }) => {
  const navigation = useNavigation();

  return (
    <View style={{ paddingHorizontal: 15 }}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#f0f2f1",
            borderColor: "#dadcdb",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 15,
            elevation: 5,
            borderWidth: 1,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ padding: 10, fontSize: 16 }}>Qty:</Text>
          </View>

          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 80 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
          </Picker>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "#fed813",
          borderColor: "#ebd047",
          borderWidth: 1,
          alignItems: "center",
          borderRadius: 10,
          marginTop: 10,
        }}
        onPress={() => onAddToCart(data, selectedValue)}
      >
        <Text
          style={{
            paddingVertical: 14,
            paddingHorizontal: 28,
            fontSize: 18,
          }}
        >
          Add to Cart
        </Text>
      </Pressable>
      <Pressable
        style={{
          borderColor: "#dfa44c",
          borderWidth: 1,
          alignItems: "center",
          borderRadius: 10,
          marginTop: 10,
          backgroundColor: "#ffa51d",
        }}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text
          style={{
            paddingVertical: 14,
            paddingHorizontal: 28,
            fontSize: 18,
          }}
        >
          Buy Now
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingVertical: 10,
    flexDirection: "row",
  },
});
export default AddToCart;
