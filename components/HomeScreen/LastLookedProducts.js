import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";

const SomeProducts = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const categories = [
    {
      title: "Keep shopping for",
      id: 0,
      image: require("../../assets/card0.jpg"),
    },
    {
      title: "Oculus",
      id: 1,
      image: require("../../assets/card1.jpg"),
    },
    {
      title: "Women's Fashion",
      id: 2,
      image: require("../../assets/card2.jpg"),
    },
    {
      title: "Shop Laptops & Tablets",
      id: 3,
      image: require("../../assets/card3.jpg"),
    },
    {
      title: "Beauty Picks",
      id: 4,
      image: require("../../assets/card4.jpeg"),
    },
  ];

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        index={2}
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={[styles.text]}>{item.title}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={[
                  {
                    width: 135,
                    height: 150,
                    resizeMode: "cover",
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                  },
                ]}
                source={item.image}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default SomeProducts;

const styles = StyleSheet.create({
  //   root: {},
  container: {
    width: 150,
    // backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 2,
  },

  textContainer: {
    padding: 5,
    width: 135,
    marginHorizontal: 5,
    height: 50,
    textAlign: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexGrow: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  text: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    // padding: 5,
    width: "100%",
    marginHorizontal: 5,
    textAlign: "center",
    alignItems: "center",
  },
});
