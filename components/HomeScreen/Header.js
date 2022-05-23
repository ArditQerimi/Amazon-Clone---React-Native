import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { SHOP_DATA } from "../../data/data";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-elements";
import Feather from "react-native-vector-icons/Feather";

const names = SHOP_DATA.map((data) => data.items);

const namesarr = [].concat(...names);

const Header = () => {
  const [search, setSearch] = useState(false);

  const [searchedItems, setSearchedItems] = useState(namesarr);
  const navigation = useNavigation();

  const handleSearch = (searchText) => {
    if (searchText) {
      setSearch(true);
      const nametolowercase = searchText.toLowerCase();

      const searched = searchedItems.filter((item) =>
        item.name.toLowerCase().includes(nametolowercase)
      );

      setSearchedItems(searched);
    } else {
      setSearch(false);
      setSearchedItems(namesarr);
    }
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "#8edfd9",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginLeft: 10,

            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "center",
            display: "flex",
            fontSize: 40,
            fontWeight: "700",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Icon
              style={styles.icon1}
              name="search"
              type="feather"
              size={25}
              color="#191919"
            />
          </TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={{
                backgroundColor: "#ffffff",
                padding: 10,
                flex: 1,
                height: 50,
                width: 230,
                paddingLeft: 5,
              }}
              placeholder="Search Amazon"
              placeholderTextColor="#959595"
              onChangeText={handleSearch}
            />
          </View>
          <TouchableOpacity>
            <Icon
              style={styles.icon2}
              name="scan1"
              type="antdesign"
              size={25}
              color="#a9abaa"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={styles.icon3}
              name="mic"
              type="feather"
              size={25}
              color="#a9abaa"
            />
          </TouchableOpacity>
        </View>
      </View>
      {search &&
        searchedItems.map((item, index) => {
          return (
            <View
              style={{
                zIndex: 9999,
                backgroundColor: "white",
                flex: 1,
              }}
              key={index}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    "DetailScreen",
                    {
                      name: item.name,
                      rating: item.rating,
                      store: item.store,
                      category: item.category,
                      price: item.price,
                      cents: item.cents,
                      carousel: item.carousel,
                      thumbnail: item.thumbnail,
                    },
                    setSearch(false)
                  )
                }
              >
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        paddingHorizontal: 25,
                        paddingVertical: 10,
                        width: "90%",
                      }}
                    >
                      <Text
                        style={{
                          color: "black",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: "center",
                        width: "10%",
                      }}
                    >
                      <Feather name="arrow-up-left" size={25} color="#eaedec" />
                    </View>
                  </View>
                  <Divider orientation="horizontal" width={2} color="#eaedec" />
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  icon1: {
    padding: 10,
    paddingRight: 10,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: 50,
    display: "flex",
    justifyContent: "center",
  },

  icon2: {
    padding: 10,
    backgroundColor: "#ffffff",
    height: 50,
    justifyContent: "center",
  },
  icon3: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
    justifyContent: "center",
  },
});
