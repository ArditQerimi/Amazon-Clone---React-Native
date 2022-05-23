import {
  Image,
  Text,
  View,
  Pressable,
  StatusBar,
  TextInput,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { RadioButton } from "react-native-paper";
import * as Yup from "yup";

const LoginFormSchema = Yup.object().shape({
  email1: Yup.string()
    .email(
      <View
        style={{
          backgroundColor: "white",
          marginTop: 30,
          borderRadius: 5,
        }}
      >
        <View
          style={{ borderColor: "#cbbfa5", borderWidth: 1, borderRadius: 5 }}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: "#fffae8",
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "#928045",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              No account found with email address.
            </Text>
            <Text style={{ fontSize: 16 }}>
              Please check your email address or click
            </Text>
            <Text style={{ fontSize: 16 }}>
              Create Account if you are new to Amazon.
            </Text>
          </View>
        </View>
      </View>
    )
    .required(
      <View
        style={{
          backgroundColor: "white",
          marginTop: 30,
          borderRadius: 5,
        }}
      >
        <View
          style={{ borderColor: "#d0424a", borderWidth: 1, borderRadius: 5 }}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: "#f0c1c4",
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "#c81641",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              There was a problem
            </Text>
            <Text style={{ fontSize: 16 }}>Enter your email address</Text>
          </View>
        </View>
      </View>
    ),
});

const Signin = ({ navigation }) => {
  const [checked, setChecked] = React.useState("second");
  const [borderColor, setBorderColor] = React.useState();
  const [borderWidth, setBorderWidth] = React.useState(1);

  return (
    <ScrollView>
      <>
        <View
          style={{
            backgroundColor: "#f3f4f8",
            alignItems: "center",
            borderColor: "#c1c2c5",
            borderBottomWidth: 1,
            paddingTop: StatusBar.currentHeight,
            marginBottom: 10,
          }}
        >
          <Image
            source={require("../assets/amazonlogo.png")}
            resizeMode="contain"
            style={{ width: 90, height: 40 }}
          />
        </View>
        <Formik
          style={{
            flex: 1,
            backgroundColor: "#f3f4f8",
          }}
          initialValues={{ email1: "" }}
          validationSchema={LoginFormSchema}
          validateOnMount={true}
          onSubmit={(values) => console.log(values.email1)}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View style={{}}>
              <View style={{ alignItems: "center" }}>
                {errors.email1 && touched.email1 && (
                  <>
                    <Text>{errors.email1}</Text>
                  </>
                )}
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 24,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                  }}
                >
                  Welcome
                </Text>
              </View>

              {/* //////////////////////////////////////////////////////////// */}
              <Pressable
                style={{
                  marginHorizontal: 15,
                }}
                onPress={() => navigation.navigate("Signup")}
              >
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 0,
                    backgroundColor: checked === "first" ? "white" : "#f3f4f8",
                  }}
                >
                  <RadioButton
                    value="first"
                    status={checked === "first" ? "checked" : "unchecked"}
                    color="orange"
                    onPress={() => navigation.navigate("Signup")}
                  />
                  <Text>
                    <Text
                      style={{
                        color: "#31383d",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      Create account.{" "}
                    </Text>
                    <Text
                      style={{
                        color: "#31383d",
                        fontSize: 16,
                      }}
                    >
                      New to Amazon?
                    </Text>
                  </Text>
                </Pressable>
              </Pressable>

              {/* //////////////////////////////////////////////////////////// */}

              <View
                style={{
                  marginHorizontal: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: checked === "second" ? "white" : "#f3f4f8",
                  }}
                >
                  <RadioButton
                    value="second"
                    status={checked === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked("second")}
                    color="orange"
                  />
                  <Text>
                    <Text
                      style={{
                        color: "#31383d",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      Sign-in.{" "}
                    </Text>
                    <Text
                      style={{
                        color: "#31383d",
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Already a customer?
                    </Text>
                  </Text>
                </View>
              </View>

              {checked === "second" ? (
                <View
                  style={{
                    marginHorizontal: 15,
                    backgroundColor: "white",
                    paddingVertical: 10,
                    marginBottom: 50,
                  }}
                >
                  <View>
                    <View>
                      <View>
                        <View style={{ marginHorizontal: 30 }}>
                          <Text
                            style={{
                              color: "#31383d",
                              fontWeight: "bold",
                              fontSize: 16,
                              marginTop: 14,
                            }}
                          >
                            Email or phone number
                          </Text>
                        </View>
                        <View style={{ margin: 10, alignItems: "center" }}>
                          <View style={{ marginBottom: 5, width: 300 }}>
                            <TextInput
                              autoCapitalize="none"
                              keyboardType="email-address"
                              textContentType="emailAddress"
                              autoFocus={true}
                              onChangeText={handleChange("email1")}
                              onBlur={() => (
                                setBorderColor(""), setBorderWidth(1)
                              )}
                              value={values.email1}
                              style={{
                                borderWidth,
                                paddingVertical: 10,
                                paddingHorizontal: 10,
                                borderColor,
                                borderRadius: 5,
                              }}
                              onFocus={() => (
                                setBorderColor("#f0c1c4"), setBorderWidth(2)
                              )}
                            />
                          </View>
                          <View style={{ width: 300, paddingTop: 10 }}>
                            <Pressable
                              onPress={
                                errors.email1
                                  ? handleSubmit
                                  : () =>
                                      navigation.navigate("SigninPassword", {
                                        email: values.email1,
                                      })
                              }
                              style={{
                                backgroundColor: "#f3d27e",
                                borderColor: "#aa9754",
                                borderWidth: 1,
                                borderRadius: 5,
                                alignItems: "center",
                                marginBottom: 5,
                              }}
                            >
                              <Text
                                style={{
                                  paddingVertical: 10,
                                  color: "#463000",
                                  fontSize: 16,
                                }}
                              >
                                Continue
                              </Text>
                            </Pressable>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              ) : (
                <></>
              )}
            </View>
          )}
        </Formik>
      </>
      {/* ///////////////// FOOTER ///////////////////// */}

      <View
        style={{ borderTopWidth: 1, borderColor: "#c1c2c5", paddingTop: 30 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginHorizontal: 10,
          }}
        >
          <View>
            <Pressable>
              <Text style={{ color: "#3e86c0", fontSize: 16 }}>
                Conditions of Use
              </Text>
            </Pressable>
          </View>
          <View>
            <Text style={{ color: "#3e86c0", fontSize: 16 }}>
              Privacy Notice
            </Text>
          </View>
          <View>
            <Text style={{ color: "#3e86c0", fontSize: 16 }}>Help</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={{ alignItems: "center", fontSize: 12 }}>
            © 1996-2022, Amazon.com, Inc. or its affiliates
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signin;
