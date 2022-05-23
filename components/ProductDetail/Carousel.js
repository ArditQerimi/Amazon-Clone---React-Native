import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  useWindowDimensions,
  FlatList,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState, useCallback } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductDetailCarousel = ({ data }) => {
  const [isFav, setIsFav] = useState(false);

  const makeFav = () => {
    setIsFav(!isFav);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const onFlatlistUpdate = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={data.carousel}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        renderItem={({ item, index }) => (
          <Image
            style={[
              {
                width: windowWidth,
                height: windowHeight / 1.5,
                resizeMode: "contain",
              },
            ]}
            source={item.image}
            key={index}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={onFlatlistUpdate}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          style={{
            position: "absolute",
            top: -45,
            left: 10,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 5,
          }}
          onPress={() => makeFav()}
        >
          <AntDesign
            name={isFav ? "heart" : "hearto"}
            size={25}
            color={isFav ? "red" : "black"}
          />
        </Pressable>
        <View
          style={{
            position: "absolute",
            top: -505,
            right: 10,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 5,
          }}
        >
          <AntDesign name="sharealt" size={25} />
        </View>
      </View>
      <View style={styles.dots}>
        {data.carousel.map((image, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? "#c9c9c9" : "#ededed",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ProductDetailCarousel;

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
