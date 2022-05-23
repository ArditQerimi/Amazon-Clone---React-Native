import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { getAuth, signOut } from "../../firebase";

const shopByDepartment = [
  {
    id: 1,
    header: "Shop by Department",
    body: [
      "Arts & Crafts",
      "Automative",
      "Baby",
      "Beaty & Personal Care",
      "Computers",
      "Books",
      "Digital Music",
      "Electronics",
      "Women's Fashion",
      "Men's Fashion",
      "Girls' Fashion",
      "Boys' Fashion",
      "Health & Household",
      "Home & Kitchen",
      "Industrial & Scientific",
      "Kindle Store",
      "Luggage",
      "Movies & Television",
      "CDs & Vinyl",
      "Pet Supplies",
      "Prime Video",
      "Software",
      "Sports & Outdoors",
      "Tools & Home Imporvement",
      "Toys & Games",
      "Video Games",
      "Deals",
    ],
  },
  {
    id: 2,
    header: "Settings",
    body: [
      "Country & Language",
      "Notifications",
      "Alexa",
      "Permissions",
      "Legal & About",
      "Switch Accounts",
      "Not Ardit? Sign Out",
    ],
  },
];

const footer = [
  {
    id: 1,
    title: "Orders",
  },
  {
    id: 2,
    title: "Buy Again",
  },
  {
    id: 3,
    title: "Account",
  },
  {
    id: 4,
    title: "Lists",
  },
];

const Menu = () => {
  const auth = getAuth();
  const signOutUser = async () => {
    await signOut(auth);
  };
  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = (index) => {
    if (isOpen === index) {
      return setIsOpen(true);
    } else {
      setIsOpen(index);
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: "#b1e7e7",
          alignItems: "center",
          justifyContent: "center",
          height: windowHeight - 115,
        }}
      >
        <ScrollView>
          <View>
            {shopByDepartment.map((item, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "#fff",
                  padding: 15,
                  width: windowWidth - 30,
                  borderRadius: 15,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.1,
                  shadowRadius: 5,
                  elevation: 3,
                  fontSize: 16,
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 16, padding: 5 }}>
                      {item.header}
                    </Text>
                    <Entypo
                      name={isOpen === index ? "chevron-up" : "chevron-down"}
                      size={25}
                      onPress={() => handleOpen(index)}
                    />
                  </View>
                  {/*  kur isOpen me funksionin handleOpen(index) 
                       shnderrohet ne index, dmth isOpen vendoset ne 1 
                       dhe index p.sh. eshte 1
                       kjo dmth se isOpen === index eshte 1 === 1
                       atehere barazimi eshte true, atehere 
                       ekzekutohet kushti i pare dhe 
                       behet mbyllja e karteles


                       kur isOpen vendoset ne index p.sh. 1 
                       dhe index eshte p.sh. eshte 1 
                       kjo dmth se isOpen === index eshte null === 1
                       atehere barazimi eshte false, atehere 
                       ekzekutohet kondicioni i dyte
                       dhe behet hapja e karteles */}
                  {isOpen === index && (
                    <View>
                      {item.body.map((item, index) => (
                        <View key={index} style={{ flexDirection: "column" }}>
                          <Text style={{ fontSize: 16, padding: 5 }}>
                            {item}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
          <View>
            <View
              style={{
                backgroundColor: "#fff",
                padding: 15,
                width: windowWidth - 30,
                borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 3,
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, padding: 5 }}>
                    Customer Service
                  </Text>
                  <Entypo name="chevron-right" size={25} onPress={() => {}} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ height: 101 }}></View>

        <View
          style={{
            width: "100%",
            height: 100,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            flexDirection: "row",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            elevation: 10,
          }}
        >
          {footer.map((item, index) => (
            <View
              onPress={signOutUser}
              key={index}
              style={{
                padding: 15,
                borderColor: "#bfc0c0",
                borderWidth: 1,
                borderRadius: 5,
                marginHorizontal: 5,
              }}
            >
              <Text>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 38,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: -2,
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: "center",
  },
  subCategoriesList: {
    marginTop: 20,
  },
});
