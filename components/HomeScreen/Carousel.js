import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Button,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useCallback, useState } from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Categories from "./LastLookedProducts";

const imageData = [
  {
    id: 1,
    title: "a",
    image: require("../../assets/c1.jpg"),
  },
  {
    id: 2,
    title: "b",
    image: require("../../assets/c2.jpg"),
  },
  {
    id: 3,
    title: "c",
    image: require("../../assets/c3.jpg"),
  },
  // {
  //   id: 4,
  //   title: "d",
  //   image: require("../../assets/carousel4.jpg"),
  // },
  // {
  //   id: 5,
  //   title: "e",
  //   image: require("../../assets/carousel5.jpg"),
  // },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.root}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        index={2}
        data={imageData}
        renderItem={({ item }) => (
          <>
            <ImageBackground
              style={[
                {
                  width: windowWidth,
                  height: windowHeight / 3.2,
                  resizeMode: "contain",
                },
              ]}
              source={item.image}
            >
              {/* <Categories /> */}
            </ImageBackground>
          </>
        )}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  root: {},
  image: {
    margin: 10,
    height: 250,
    resizeMode: "contain",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: "#ededed",
    borderColor: "#c9c9c9",
    margin: 5,
  },
});
